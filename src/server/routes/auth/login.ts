import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


import db from '../../db';

import config from '../../config';


const router = Router();

router.post('/', async (req, res) => {
    const {email, password } = req.body;
    

    try {

        if (!email || typeof email !=='string' || email.length <7 || email.length > 100) {
            return res.status(400).json({ message: 'Email must be betweeen 7 and 100 characters'})
        }

        if(!password || typeof password !=='string') {
            return res.status(400).json({message: 'Password must be provided'})
        }


        const user = await db.users.find(email);

        if(!user) {
            return res.status(400).json({ message: "Invalid Credentials"})
        }

        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'There was an error when trying to login!'})
    }
})




export default router;