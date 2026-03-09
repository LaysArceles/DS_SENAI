
import { Express } from "express";
import express  from "express";
import Product from './product.ts';

export default function(app:Express){
    app
    .use(express.json())
    .use('/dta',Product)
}
