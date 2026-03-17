import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document {
name: string;
description: string;
price: number;
stock: number;
category: string;
createdAt: Date;
image: String;
}

const ProductSchema: Schema = new Schema({
name: { type: String, required: true },
description: { type: String, required: true },
price: { type: Number, required: true },
stock: { type: Number, default:0 },
category: { type: String, required: true },
createdAt: {type:Date, default: Date.now},
image:{type:String,required: true}
});

const Product = mongoose.model<IProduct>('Product', ProductSchema, 'Product');

export default Product;