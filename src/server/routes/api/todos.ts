import express from "express";
import db from '../../db';
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const items = await db.todos.getAll();
        res.json(items);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Cannot get all items at this time" });
    }
});

router.post("/", async (req, res) => {
    try {
        const user_id = req.user.id;
        const { name } = req.body;

        if (!name || typeof name !== "string" || name.length < 8 || name.length > 100) {
            return res.status(400).json({ message: "Your todo list item must be between 8 and 100 characters in length" });
        }

        const results = await db.todos.create({ name, user_id });
        const id = results.insertedId


        res.status(201).json({ message: "Successfully added item!", id });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Cannot create that item at this time" });
    }
});

router.put("/:id/:admin?", async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);
        const user_id = req.user.id;
        const { name } = req.body;

        if (!name || typeof name !== "string" || name.length < 2 || name.length > 64) {
            return res.status(400).json({ message: "Your item must be between 2 and 64 characters in length" });
        }

        const isAdminRequest = req.params.admin && req.user.role === "admin";

        if (isAdminRequest) {
            await db.todos.admin.updateOne(id, name);
            return res.status(200).json({ message: "Successfully deleted!" });
        }

        await db.todos.updateOne(id, user_id, name);
        res.status(201).json({ message: "Successfully updated item!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Cannot update that item at this time" });
    }
});

router.delete("/:id/:admin?", async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);

        const isAdminRequest = req.params.admin && req.user.role === "admin";

        if (isAdminRequest) {
            await db.todos.admin.deleteOne(id);
            return res.status(200).json({ message: "Successfully deleted!" });
        }

        await db.todos.deleteOne(id, req.user.id);
        res.status(200).json({ message: "Successfully deleted!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Cannot delete that item at this time" });
    }
});

export default router;