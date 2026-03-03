import express from 'express'
import router  from "./routes/routes.ts"
import connectDB from '../database/database.ts'

const port = 8080;
const app = express();

app.get('/', (req,res)=>{
    res.status(200).send({response:"Api Ok!"})
})
connectDB()
router(app)
app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})