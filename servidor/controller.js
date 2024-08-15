const express = require('express')
const router = express.Router()
const db = require('./db.js')

function executarConsulta(sql, params, res, erroMsg) {
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(500).json({ erro: erroMsg, detalhes: err })
      } else {
        res.status(200).json(result)
      }
    })
}


router.get('/', (req, res) => {
    executarConsulta('SELECT * FROM tb_usuário', [], res, "Erro na consulta de tbteste")
})

router.post('/', (req, res) => {
    const { usuario, email, senha } = req.body;
    executarConsulta('INSERT INTO tb_usuário (nome, email, senha) VALUES (?, ?, ?)', [usuario, email, senha], res, "Erro no cadastro de administradora!")
})

router.delete("/:id", (req, res) => {
  const Id = req.params.id;
  console.log("deletando usuário " + Id + "...")
  executarConsulta('DELETE FROM tb_usuário WHERE id = ?', [Id], res, 'Erro ao deletar administradora')
})

module.exports = router
