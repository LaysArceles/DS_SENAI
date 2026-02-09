import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];

router
     .post('/add', (req:Request,res:Response) => {
        const{name,lastname, age, image}= req.body
        // console.log (name,lastname, age, image)
        people.push({name,lastname, age, image})
        res.status(200).send({message:'Usario ${name} %{lastname} cadastrado com sucesso!'})
     })
     .get ('/usuario',(req:Request,res:Response) => {
        res.status(200).send({users:people})
     })
//....

export default router;