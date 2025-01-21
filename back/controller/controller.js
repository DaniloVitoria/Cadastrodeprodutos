import connection from '../config/config.js';

//selecionando todos os produtos do banco
connection.query('SELECT * FROM produtos', (error, results) =>{
    if (error) {
        console.error(" Erro ao realizar a consulta"+ error.message)
        return
    }
    console.log("produtos" + results)
});




let produtosC =[];
let guardaremprodutos = []


async function cadastrarProduto(req, res) {
    let cadastro = req.body.cadastro;
    let valor =  cadastro.toLowerCase();
    produtosC.push(valor)
    console.log("Produto guardado com sucesso", produtosC)

    res.status(200).json({ "message": "Produto guardado com sucesso" })
}

export  {cadastrarProduto, produtosC}