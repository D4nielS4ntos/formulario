const mysql = require('mysql')

const dbConexao = {
    host: 'localhost',
    user: 'root',
    database: 'db_formulário'
}

const connection = mysql.createConnection(dbConexao)

connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados MySQL:', err)
        process.exit(1)
    }
    console.log('Conectado ao banco de dados MySQL!')
})

module.exports = connection
