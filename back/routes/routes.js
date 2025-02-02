import express from 'express';
import cors from 'cors';
import {cadastrarProduto, ProdutosC, deletarproduto} from '../controller/controller.js';




const router = (app) => {
app.use(cors());
app.use(express.json())
    app.post('/cadastrar', cadastrarProduto)
    app.delete('/deletar/:id', deletarproduto)
    app.get('/produtos', ProdutosC)
}

export default router