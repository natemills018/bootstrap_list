import { client } from "../connection";
import { TodoItem } from "../../types";


const todos = client.db().collection<TodoItem>('todos');


const getAll = () => todos.find({}).toArray();

const create = (newTodo: TodoItem) => todos.insertOne(newTodo);
const deleteOne = (_id: TodoItem["_id"], user_id: TodoItem["user_id"]) => todos.deleteOne({ _id, user_id})
const updateOne = (_id: TodoItem["_id"], user_id: TodoItem["user_id"], name: string) => todos.updateOne({ _id, user_id }, { $set: { name } });


const admin = {
    // deleteOne: (_id: TodoItem['_id'] => todos.deleteOne({_id})),

    deleteOne: (_id: TodoItem["_id"]) => todos.deleteOne({ _id }),



    updateOne: (_id: TodoItem['_id'], name: string) => todos.updateOne({ _id }, { $set: { name } }),

}

export default {
    getAll,
    create,
    deleteOne,
    updateOne,
    admin
}