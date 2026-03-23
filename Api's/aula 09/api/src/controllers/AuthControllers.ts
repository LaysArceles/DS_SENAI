import { Request, Response } from "express";
import User from "../models/user.ts";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import CryptoJS from 'crypto-js'



dotenv.config();

class AuthController {
    static async register(req: Request, res: Response): Promise<any> {
        const { name, email, password } = req.body;

        const passwordCrypt = CryptoJS.AES.encrypt(password, process.env.SECRET as string).toString();

        const user = new User({
            name,
            email,
            password: passwordCrypt
        });

        try {
            await user.save();
            return res.status(201).send({ message: "User successfully registered." });
        } catch (error) {
            return res.status(500).send({ message: "Something failed" });
        }

    }

    static async login(req: Request, res: Response): Promise<any> {
        const {email,password} = req.body
        
        const user =await User.findOne({email:email})

        if(user){
            const decryptedPassaword = CryptoJS.AES.decrypt(user.password, process.env.SECRET as string)
            const PassaworedDecrypted = decryptedPassaword.toString(CryptoJS.enc.Utf8)
            
            
            if(password !== PassaworedDecrypted){
                return res.status(400).send({response:"Invalid email and/or password"})
            }
            const secret = process.env.SECRET
            const token = jwt.sign(
                { id: user.id},
                secret as string,
                {expiresIn:'2 days'}
            )
            return res.status(200).send({token:token})
            
        }
        return res.status(404).send({Response: "user not found"})
    }
}

export default AuthController;