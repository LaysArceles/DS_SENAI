import express from 'express'
import person from ''

const port = 8080;
const app = express();

// const people = {
//     name: "Lays",
//     lestname: "Arceles"
// }
// // Jeito Certo
// app.get('/objeto',(req,res)=>{
//     // nome que ira chegar 
//     res.send({people: people})
// })

// app.get('/direto',(req,res)=>{
//     res.send({people})
// })

// //consulta rotas
// //http://localhost:8080/
// app.get('/',(req,res)=>{
//     res.send({response: "Api funcional!"})
// })

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`)
})

