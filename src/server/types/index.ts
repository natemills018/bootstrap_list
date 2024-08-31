import { ObjectId } from "mongodb";

export interface User {
    _id?: ObjectId;
    name: string;
    email: string;
    password: string;
    role: 'user'| 'admin'
}

export interface TodoItem {
    _id?: ObjectId;
    name: string;
    user_id: User["_id"]
}