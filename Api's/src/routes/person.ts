import express, { Request, response, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];

router
     .post('/add', (req:Request,res:Response) => {
        const{name,lastname, age, image}= req.body
        // console.log (name,lastname, age, image)
        people.push({name,lastname, age, image})
        res.status(200).send({message:'Usario cadastrado com sucesso!'})
     })
     .get ('/usuario',(req:Request,res:Response) => {
        res.status(200).send({users:people})
     })
     .get('/usuario/:id',(req:Request, res: Response) =>{
         const {id} = req.params
         let convertID = Number(id)
         res.status(200).send({response: people[convertID] })
     })

     .get('/filtro', (req:Request, res: Response) =>{
         const {name ,lastname} = req.query
         res.status(200).send({response: name, lastname })

     })
// //{
//     "name": "Lays",
//     "lastname": "Arceles",
//     "age": 20,
//     "image": "https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/05/maomao-looking-intrigued-with-cat-ears-in-the-apothecary-diaries-1.jpg?q=70&fit=crop&w=1232&h=693&dpr=1"
// }

export default router;