const nomeInput = document.getElementById("nome");
const imgInput = document.getElementById("img");
const p = document.getElementById("p");

const url = "http://localhost:3000";

// Modal elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalNome = document.getElementById("modal-nome");
const modalDescricao = document.createElement("p"); // Adicione um elemento para a descrição
modal.appendChild(modalDescricao);
const span = document.getElementsByClassName("close")[0];

// Parte de exibir produtos
const btn = document.getElementById("btn");
const imgshow = document.getElementById("imgshow");
const nameshow = document.getElementById("nameshow");

const produtosmostrar = document.getElementById("produtosmostrar");
const produtosDiv = document.getElementById("produtos");

btn.addEventListener("click", async () => {
    try {
        const response = await fetch(url + "/produtos");
        const data = await response.json();
        console.log("Mostrando os produtos cadastrados", data);

        // Exibindo os produtos no front-end
        produtosDiv.innerHTML = ""; // Limpa os produtos anteriores
        data.forEach(produto => {
            const produtoDiv = document.createElement("div");
            const img = document.createElement("img");
            img.classList.add("imagensdinamicas");
            img.src = produto.img;
            const nome = document.createElement("p");
            nome.textContent = produto.nome;
            produtoDiv.appendChild(img);
            produtoDiv.appendChild(nome);
            produtoDiv.classList.add("produtoDIv");
            produtosDiv.appendChild(produtoDiv);
            produtosDiv.classList.add("produtosDiv");

            // Adiciona evento de clique para abrir o modal
            img.addEventListener("click", () => {
                modal.style.display = "block";
                modalImg.src = produto.img;
                modalNome.textContent = produto.descricao;
                modalDescricao.textContent = produto.descricao; // Exibe a descrição no modal
            });
        });
    } catch (error) {
        console.error("Erro ao mostrar os produtos cadastrados", error);
    }
});

document.getElementById("cadastrar").addEventListener("click", async () => {
    let nome = nomeInput.value.toLowerCase();
    let img = imgInput.value;

    try {
        const response = await fetch(url + "/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome, img })
        });
        const data = await response.json();
        p.innerHTML = data.message; // Corrigido para exibir a mensagem corretamente
        console.log(data);
    } catch (error) {
        console.log("Erro ao cadastrar produto", error);
    }
});

// Deletar os produtos por id
const deletar = document.getElementById("deletar");
const identrou = document.getElementById("id");
deletar.addEventListener("click", async () => {
    const id = identrou.value;
    try {
        const response = await fetch(`${url}/deletar/${id}`, {
            method: "DELETE"
        });
        const data = await response.json();
        console.log(data.message);
        btn.click(); // Atualiza a lista de produtos após a exclusão
    } catch (error) {
        console.error("Erro ao deletar produto", error);
    }
});

// Fecha o modal quando o usuário clica no <span> (x)
span.onclick = function() {
    modal.style.display = "none";
}

// Fecha o modal quando o usuário clica fora do modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

async function getProdutos() {
    try {
        const response = await fetch(url + '/produtos');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Erro ao buscar produtos:', error);
    }
}

getProdutos();