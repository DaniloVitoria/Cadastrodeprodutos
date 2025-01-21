import express from 'express';
import cors from 'cors';
import {cadastrarProduto, produtosC} from '../controller/controller.js';

const produtos = [
    {nome: "Maquina"
    },
    {nome: "Cadeira"},
    {nome: "Mesa"}
]


const router = (app) => {
app.use(cors());
app.use(express.json())
    app.post('/cadastrar', cadastrarProduto)
    app.get('/produtos', (req, res) =>{
        res.status(200).json(produtosC)
    })
}

export default router