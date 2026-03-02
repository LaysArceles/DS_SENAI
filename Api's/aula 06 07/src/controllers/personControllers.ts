import {Request, response, Response}from "express";
import Person from "../models/Person.ts";

class personControllers{
    static async postUser(req:Request, res:Response){
        const {name,lastname, age} = req.body
        const person = new Person({ name,lastname ,age });
        await person.save();

        return res.status(200).send({response:`Bem vindo ${name}`})
    }
    static async getUser(req:Request, res:Response){ 
        const users = await Person.find()
        return res.status(200).send({response:users})
    }
    static async putUser(req:Request, res:Response){ 
        const {name,lastname,age} = req.body
        const {id} = req.params
        await Person.findByIdAndUpdate(id,{name, lastname, age})
    
        return res.status(200).send({response: `Dados Atualizado ${name}`})
    }
    static async patchUser(req:Request, res:Response){ 
        const {name} = req.body
        const {id} = req.params
        await Person.findByIdAndUpdate(id,{name})
        return res.status(200).send({response: `Dados Atualizado ${name}`})
    }
     static async deletUser(req:Request, res:Response){ 
        const { id } = req.params
        await Person.findByIdAndDelete(id)
        res.status(200).send({ response: "Usuario deletado" })
    }

}
export default personControllers

