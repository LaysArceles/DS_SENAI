
import { Express } from "express";
import express  from "express";
import Product from './product.ts';
import auth from './auth.ts'

export default function(app:Express){
    app
    .use(express.json())
    .use('/Api',Product)
    .use('/api/auth', auth)
}
