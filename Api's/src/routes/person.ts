import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];

router
     .post('/add', (req:Request,res:Response) => {
        const{name,lastname, age, image}= req.body
        
        console.log (name,lastname, age, image)

     })
//....

export default router;