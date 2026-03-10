import {Request, response, Response}from "express";
import product from "../models/product.ts";
import Product from "../models/product.ts";
import mongoose from "mongoose";

class ProductControllers{
    static async Create(req:Request, res:Response){
        const {name,description, price,stock,category} = req.body
        const Product = new product( {name,description, price,stock,category});
        await Product.save();
        return res.status(200).send({response:`${name} cadastrado!`})
    }
    static async findAll (req:Request, res:Response){ 
        const Product = await product.find();
        return res.status(200).send({response:Product})
    }

    static async findByid(req:Request,res:Response){
        const {id} = req.params;
        const exist = await Product.findById(id);
        if (!exist){
            return res.status(404).send({response:"Produto não encontrado"})
        }
        return res.status(200).send({response: exist})

    }
    static async update (req:Request,res:Response){
        const {name,description, price,stock,category} = req.body
        const {id} = req.params
        await Product.findByIdAndUpdate(id,{name,description,price,stock,category})
        return res.status(200).send({response:"Produto Atualizado", Response:Product})

        
    }
    static async remove(req:Request, res:Response){
        const{id}=req.params
        await Product.findByIdAndDelete(id)
        return res.status(200).send({response:"Produto Removido"})
    }

}
export default ProductControllers