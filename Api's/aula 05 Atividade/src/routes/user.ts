import express, { Request, response, Response, Router } from 'express';
import { error } from 'node:console';

interface User {
    id: number;
    name: String;
    email: string;
    tipo: "Aluno" | "Professor" | "Coordenador";
    ativo: boolean;
    date: Date;
}

const router: Router = express.Router();
const user: User[] = [];

router
    .post('/add', (req: Request, res: Response) => {
        const { id, name, email, tipo } = req.body
        const date = new Date()
        const Idzao = Number(id)

        const existemail = user.find((e) => e.email == email)
        const existid = user.find((u) => u.id == Idzao)

        if (existid) {
            return res.status(400).send({ response: "Usuario já existe :( " })
        }
        if (existemail) {
            return res.status(400).send({ response: "Email já existe no servidor" })
        }
        if (name == null || email == null) {
            return res.status(400).send({ response: "Para cadastrar é necessario name e email" })
        }
        const ativo = true
        user.push({ id, name, email, tipo, ativo, date })
        res.status(201).send({ response: `Bem vindo ${name}` })
    })
    .get('/access', (req: Request, res: Response) => {
        res.status(200).send({ users: user })
    })
    .get('/access/:id', (req: Request, res: Response) => {
        const { id } = req.params
        const idzao = Number(id)
        try {
            const Existid = user.find((i) => i.id == idzao)
            console.log(Existid)
            if (!Existid) {
                return res.status(404).send({ response: "Usuario não Existe" })
            }
            return res.status(200).send({ response: Existid })
        }
        catch (e) {
            return res.status(500).send({ response: "Usuário não encontrado" })
        }

    })
    .get('/filter', (req: Request, res: Response) => {
        const { tipo } = req.query
        const filteredUsers = user.filter((t) => t.tipo === tipo)
        res.status(200).send({ response: { tipo }, users: filteredUsers })
    })
    .put('/update/:id', (req: Request, res: Response) => {
        const { name, email, tipo, ativo } = req.body
        const { id } = req.params
        let idzao = Number(id)
        try {
            const exists = user.find((i) => i.id == idzao)

            const existemail = user.find((e) => e.email == email)

            if (existemail) {
                return res.status(400).send({ response: "Email já existe no servidor" })
            }
            if (!exists) {
                return res.status(400).send({ response: "Este usuário não existe no servidor" })
            }
            const createDate = exists.date

            exists.name = name
            exists.email = email
            exists.ativo = ativo
            exists.tipo = tipo
            exists.date = createDate

            res.status(200).send({ response: `Dados do usuario ${name} está atualizado` })
        }
        catch (e) {
            res.status(500).send({ response: e })
        }



    })
    .patch('/updateName/:id', (req: Request, res: Response) => {
        const { name } = req.body
        const { id } = req.params
        let idzao = Number(id)
        const exists = user.find((i) => i.id == idzao)
        if (!exists) {
            return res.status(400).send({ response: "Este usuário não existe no servidor" })
        }
        exists.name = name
        res.status(200).send({ response: `Dados do usuario ${name} está atualizado` })

    })
    .patch('/updateAtivo/:id', (req: Request, res: Response) => {
        const { ativo } = req.body
        const { id } = req.params
        let idzao = Number(id)
        const exists = user.find((i) => i.id == idzao)
        if (!exists) {
            return res.status(400).send({ response: "Este usuário não existe no servidor" })
        }
        exists.ativo = ativo
        res.status(200).send({ response: `Dados do usuario ${exists.name} está atualizado` })

    })
    .delete('/delete/:id', (req: Request, res: Response) => {
        const { id } = req.params
        let idzao = Number(id)
        const exists = user.find((i) => i.id == idzao)
        if (!exists) {
            return res.status(400).send({ response: "Este usuário não existe no servidor" })
        }

        const index = user.indexOf(exists)
        delete user[index]
        res.status(200).send({ response: "Usuario deletado" })

    })

export default router