import express from "express";
import router from './routes/routes.js';

const port = 8080;
const app = express();

app.get('/', (req,res )=> {
    res.status(200).send({response: "Api Ok!"})
})

router(app)

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`)
})