import { NextFunction, Response,Request } from "express";
import Product from "../models/product.ts";

export const validateAdd = (req:Request, res:Response, next: NextFunction)=>{
    const {name,description, price,stock,category} = req.body
    if(!name|| !description||!price ||!category ||!stock ){
        return res.status(400).send({response: "Falta preencher campos obrigatórios"})
    }
    next();
}
export const validateID = (req:Request, res:Response, next:NextFunction)=>{
    const {id} = req.params
    const exist = Product.findById(id);
    if(!exist){
        return res.status(400).send({response: "Este produto não existe! :("})
    }
    next();
}
