import connection from '../config/config.js';
import gerarDescricaoComGemini from '../service/service.js';

//selecionando todos os produtos do banco
connection.query('SELECT * FROM produtos', (error, results) =>{
    if (error) {
        console.error(" Erro ao realizar a consulta"+ error.message)
        return
    }
    console.log("produtos" + JSON.stringify(results));


});








async function cadastrarProduto(req, res) {
   let nome = req.body.nome;
   let img = req.body.img
    


   try{
    const descricao = await gerarDescricaoComGemini(img);




//inserindo o produto dentro do banco de dados
const query = 'INSERT INTO produtos (nome , img, descricao) VALUES (?, ?, ?) ';
connection.query(query, [nome, img, descricao], (error, results) =>{
    if(error){
        console.error("Erro ao inserir produto" + error.message);
        res.status(500).json({ "message": "Error ao guardar o produto"})
        return
    }
    console.log("Produto guardado com sucesso", results)
    res.status(200).json({ "message": "Produto guardado com sucesso"})
    return;
})

   }catch(error){
    console.error("Erro ao gerar descrição da imagem: " + error.message);
    res.status(500).json({ "message": "Erro ao gerar descrição da imagem" });

   }


}



async function ProdutosC(req, res){
    const query = 'SELECT * FROM produtos';
    connection.query(query, (error, results) =>{
        if(error){
            console.error("Erro ao buscar produtos" + error.message);
            res.status(500).json({ "message": "Erro ao buscar produtos"})
            return
        }
        console.log("Prodtuso guardados com sucesso", results)
        res.status(200).json(results)
        return;
    })
}



async function deletarproduto(req,res){
    const id = req.params.id;
    const query = "DELETE FROM produtos WHERE id = ? ";
    connection.query(query, [id], (error, results)=>{
        if(error){
            console.error("Erro ao deletar produto: " + error.message);
            res.status(500).json({ "message": "Erro ao deletar produto" });
            return; 
        }
        console.log("Produto deletado com sucesso", results);
        res.status(200).json({ "message": "Produto deletado com sucesso" });
        return;
    })
}
export  {cadastrarProduto, ProdutosC, deletarproduto}