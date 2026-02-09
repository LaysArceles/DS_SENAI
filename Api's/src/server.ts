import express from 'express'

const port = 8080;
const app = express();

//consulta rotas
//http://localhost:8080/
app.get('/',(req,res)=>{
    res.send({response: "Api funcional!"})
})

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`)
})

