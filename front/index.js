const cadastro = document.getElementById("cadastro");
const p = document.getElementById("p");
const url = "http://localhost:3000";


cadastro.addEventListener("keyup", async (event) => {
    if (event.key === "Enter") {
        let valor = cadastro.value.toLowerCase();
        try {
            const response = await fetch(url + "/cadastrar", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ cadastro: valor })
            });
            const data = await response.json();
            p.innerHTML = data.message;
            console.log(data);
        } catch (error) {
            console.log('Erro ao cadastrar produto:', error);
        }
    }
});


async function getProdutos() {
    try {
        const response = await fetch(url + '/produtos');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Erro ao buscar produtos:', error);
    }
}

getProdutos()