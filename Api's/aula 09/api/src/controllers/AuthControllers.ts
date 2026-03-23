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
            return res.status(201).send({ message: "Usuário cadastrado com sucesso" });
        } catch (error) {
            return res.status(500).send({ message: "Something failed" });
        }

    }

    static async login(req: Request, res: Response): Promise<any> {
        const {email,passaword} = req.body
        const decryptedPassaword = CryptoJS.AES.decrypt(passaword, process.env.SECRET as string)
        const PassaworedDecrypted = decryptedPassaword.toString(CryptoJS.enc.Utf8)
        
        
        if(passaword != PassaworedDecrypted){
            return res.status(400).send({response:"Email e/ou senha inválidos"})
        }
        
    }
}

export default AuthController;