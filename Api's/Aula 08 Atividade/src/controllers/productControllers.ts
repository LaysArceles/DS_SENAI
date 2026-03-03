import {Request, Response}from "express";
import product from "../models/product.ts";

class ProductControllers{
    static async postCreate(req:Request, res:Response){
        const {name,description, price,stock,category} = req.body
        const Product = new product( {name,description, price,stock,category});
        await Product.save();
        return res.status(200).send({response:`Product ${name} cadastrado!`})
    }
    static async getProdutc(req:Request, res:Response){ 
        const {valor} = req.body
        const {stock} =req.bory
        const {category} = req.bory
        const Product = await product.find().select("-__v");
        const filtered = Product.filter((p) => p.category === category)
        const filteredmaior = Product.filter((p) => p.price >= valor)
        const filteredmenor = Product.filter((p) => p.category === category)
        
        if (filtered){
            res.status(200).send({ response: { category }, product: filtered })
        }
        return res.status(200).send({response:Product})


    }
}
export default ProductControllers