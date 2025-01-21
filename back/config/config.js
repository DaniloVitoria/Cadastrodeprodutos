import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '29241888F',
    database: 'CRUD'
});

//estabelecendo conexão com o banco de dados
connection.connect((err) => {
    if( err) {
        console.error("Erro ao conectar com o banco de dados", err.message);
        return
    }    
    console.log("COnexão com o banco de dados estabelecida com sucesso")
})

export default connection;