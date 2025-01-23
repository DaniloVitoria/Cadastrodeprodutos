const nomeInput = document.getElementById("nome");
const imgInput = document.getElementById("img");
const p = document.getElementById("p");



//parte de exibir produtos
const btn = document.getElementById("btn");
const imgshow = document.getElementById("imgshow");
const nameshow = document.getElementById("nameshow");


const produtosmostrar = document.getElementById("produtosmostrar");
const produtosDiv = document.getElementById("produtos");
const url = "http://localhost:3000";

btn.addEventListener("click", async () => {
    try {
        const reponse = await fetch(url + "/produtos");
        const data = await reponse.json();

        console.log(data + "Mostrando os produtos cadastrados");



        //exibindo os produtos no front-end
        const produtosDiv = document.getElementById("produtos");
        produtosDiv.innerHTML = "";
        data.forEach(produto => {
            const produtoDIv = document.createElement("div");
            const img = document.createElement("img");
            img.classList.add("imagensdinamicas")
            img.src= produto.img;
            const nome = document.createElement("p");
            nome.textContent = produto.nome;
            produtoDIv.appendChild(img);
            produtoDIv.appendChild(nome)
            produtoDIv.appendChild(document.createElement("hr"));
            
            produtosDiv.appendChild(produtoDIv);
            produtosDiv.classList.add("produtosDiv")
            
        }) 
    }catch(error){
        console.error("Erro ao mostrar os produtos cadastrados", error)
    }
})




document.getElementById("cadastrar").addEventListener("click", async () => {
    let nome = nomeInput.value.toLowerCase();
    let img = imgInput.value;


    try {
        const response = await fetch(url + "/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome, img})
        });
        const data = await response.json();
        let p = data.message.nome;
        p.innerHTML = data.message.img;
        console.log(data)
    }catch(error){
        console.log("Erro ao cadastrar produto", error)
    }
    
})


//deletar os produtos por id

const deletar = document.getElementById("deletar")
const identrou = document.getElementById("id");
deletar.addEventListener("click", async () =>{
    const id = identrou.value;
    try{
    const response = await fetch(`${url}/deletar/${id}`, {
        method: "DELETE"
    } )
    const data = await response.json();
    console.log(data.message)
    btn.click();
}catch(error){
    console.error("Erro ao deletar produto", error)
}
})