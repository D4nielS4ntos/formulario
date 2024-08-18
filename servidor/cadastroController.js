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
    console.log("Realizando consulta em tb_usuário")
    executarConsulta('SELECT * FROM tb_usuário', [], res, "Erro na consulta de tb_usuário")
})


router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log("Realizando consulta de id em tb_usuário")
    executarConsulta('SELECT * FROM tb_usuário WHERE id = ?', [id], res, "Erro na consulta de id em tb_usuário")
})


router.post('/', (req, res) => {
    const { usuario, email, senha } = req.body;
    console.log("Realizando cadastro em tb_usuário")
    executarConsulta('INSERT INTO tb_usuário (nome, email, senha) VALUES (?, ?, ?)', [usuario, email, senha], res, "Erro no cadastro de tb_usuário")
})


router.put('/', (req, res) => {
  const { id, usuario, email, senha } = req.body
  console.log("Realizando atualização de usuário em tb_usuário")
  executarConsulta('UPDATE tb_usuário SET nome = ?, email = ?, senha = ? WHERE id = ?', [usuario, email, senha, id], res, "Erro ao atualizar usuário de tb_usuário")
})


router.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log("Realizando deleção de usuário de tb_usuário")
  executarConsulta('DELETE FROM tb_usuário WHERE id = ?', [id], res, 'Erro ao deletar usuário de tb_usuário')
})

module.exports = router
