import express, { Request, response, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];

router
    .post('/add', (req: Request,res:Response)=>{
        const {name,lastname} = req.body
        const {id} = req.params
        people.push({id,name,lastname})
        res.status(200).send({message:`Bem vindo ${name}`})
    })

    .get ('/users/:id', (req:Request, res:Response)=>{
        const {id} = req.params
        const convert = Number(id)
        res.status(200).send({response:people[convert]})
    })
     .get('/:id', (req:Request, res: Response) =>{
         const {id} = req.params
         const {name ,lastname} = req.query
         res.status(200).send({response: name, lastname })
     })

     .put('/upgrade/:id' ,(req:Request, rep:Response)=>{
         const {id} = req.params
         const {name, lastname} = req.body
         rep.status(200).send ({ response:`Está Atualizado ${name}!`})

     })
     .delete('/delet/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        res.status(200).send(`Pessoa com o id: ${id} foi deletada `)
        })
    
export default router;