import ed from "./views/editView.js"
import fm from "./views/formulárioView.js"


let main = document.querySelector('main')
main.innerHTML += fm.criarHeader("Tabela Usuários")
main.innerHTML += ed.criarTabela()

let table = document.querySelector('table')


async function gerarTabela() {
    try {
        let response = await fetch('/cadastrar')
        if (!response.ok) throw new Error("Erro ao excluir a cidade");
        let data = await response.json()
        for (let element of data) {
            table.innerHTML += ed.criarLinha(element)
        }
        alterarDado()
        deletarDado()   
    } catch (error) {
        console.error(`Erro ao tentar gerar tabela ${error}`)
    }
}
gerarTabela()


function alterarDado() {
    let botoesDeAlterar = document.querySelectorAll('.altbutton')
    botoesDeAlterar.forEach(botaoDeAlterar => {
        botaoDeAlterar.addEventListener('click', () => {
            const CoUsuario = botaoDeAlterar.getAttribute('altbutton-id')
            alterar(CoUsuario)
        })
    })
}


function deletarDado() {
    let botoesDeAlterar = document.querySelectorAll('.delbutton')
    botoesDeAlterar.forEach(botaoDeAlterar => {
        botaoDeAlterar.addEventListener('click', () => {
            const CoUsuario = botaoDeAlterar.getAttribute('delbutton-id')
            deletar(CoUsuario)
        })
    })
}


function alterar(id) {
    main.innerHTML = ""
    main.innerHTML += fm.criarHeader("Alterar Usuário")
    main.innerHTML += fm.criarFormulario()
    alert(id)
}

function deletar(id) {
    const response = fetch(`/cadastrar/${id}`, { method: "DELETE" })
    if (!response.ok) throw new Error("Erro ao excluir dado")
}
