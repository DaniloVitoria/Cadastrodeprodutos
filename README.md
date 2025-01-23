Neste projeto integrado com a gemini do google para gerar descrição das imagens, é possível cadastrar imagens, adicionando um nome e o resultado será a exibição das imagem e quando se clica nela abrirá um modal aonde a baixo aparecera a descrição da imagen criado pela gemini do google.

Para que o projeto funcione corretamente é necessário ter o banco de dados mysql na sua máquina com uma tabela com as seguintes colunas:
id, nome, descricao, img

Recomento as seguintes configurações das colunas:

    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) not null,
    descricao LONGTEXT not null,
    img varchar(250) not null

É necessário ter uma chave api do google gemini e adicionar no arquivo .env com o campo: GEMINI_API_KEY = "Coloque a sua chave da api aqui dentro"

Com o projeto configurado basta digitar no terminal: npm run dev
