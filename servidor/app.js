const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const formRouter = require('./controller.js')


app.use(express.static("../cliente"))
app.use(express.json())

app.get("/", (req, res) => {
    let caminho = __dirname.split("\\")
    caminho.pop()
    caminho = caminho.join("\\")
    res.sendFile(path.join(caminho, 'cliente/index.html'))
})

app.get("/edit", (req, res) => {
    let caminho = __dirname.split("\\")
    caminho.pop()
    caminho = caminho.join("\\")
    res.sendFile(path.join(caminho, 'cliente/edit.html'))
})

app.use("/cadastrar", formRouter)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`)
})
