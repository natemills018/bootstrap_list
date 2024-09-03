import { Router } from 'express';
import bcrypt from 'bcrypt';
import db from '../../db';
import tokens from '../../utilities/tokens';


const router = Router();



router.post('/', async (req, res) => {
    
    const { email, password, name } = req.body
    
    try {
        if (!email || typeof email !== "string" || email.length < 7 || email.length > 100) {
            return res.status(400).json({ message: "Email must be between 7 and 100 characters" });
        }

        if (!password || typeof password !== "string" || password.length < 12 || password.length > 120) {
            return res.status(400).json({ message: "Password must be between 12 and 120 characters" });
        }

        if (!name || typeof name !== "string" || name.length < 2 || name.length > 32) {
            return res.status(400).json({ message: "Name must be between 2 and 32 characters" });
        }

        const hashed = await bcrypt.hash(password, 12);


        const results = await db.users.create({ name, email, password: hashed, role: 'user'})
        const id = results.insertedId

        const token = tokens.sign({ id, email, role: 'user'})

        res.status(200).json({ message: 'Successfully Registered!', id, token})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'This is an error while registering!'})
    }
})






export default router;