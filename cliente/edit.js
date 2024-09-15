import editView from "./views/editView.js"
import formView from "./views/formulárioView.js"
import formController from "./controllers/formController.js"


let main = document.querySelector('main')
main.innerHTML += formView.criarHeader("Tabela Usuários")
main.innerHTML += editView.criarTabela()

let table = document.querySelector('table')


async function gerarTabela() {
    try {
        let response = await fetch('/cadastrar')
        if (!response.ok) throw new Error("Erro ao excluir a cidade");
        let data = await response.json()
        for (let element of data) {
            table.innerHTML += editView.criarLinha(element)
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
    main.innerHTML += formView.criarHeader("Alterar Usuário")
    main.innerHTML += formView.criarFormulario()
    main.style.width = "100%"
    alterarEventos(id)
    formController.colocarValoresDeAlterarUsuario(id)
}


function deletar(id) {
    const response = fetch(`/cadastrar/${id}`, { method: "DELETE" })
    if (!response.ok) throw new Error("Erro ao excluir dado")
}

function alterarEventos(id) {
    let form = document.querySelector('form')
    let usuario = document.querySelector('input#username')
    let email = document.querySelector('input#email')
    let senha = document.querySelector('input#senha')
    let senhaConfirm = document.querySelector('input#senhaconfirm')
    let botao = document.querySelector('button#cadastro')


    usuario.addEventListener("blur", () => {
        formController.checarInputUsuario(usuario)
    })


    email.addEventListener("blur", () => {
        formController.checarInputEmail(email)
    })


    senha.addEventListener("blur", () => {
        formController.checarInputSenha(senha)
    })


    senhaConfirm.addEventListener("blur", () => {
        formController.checarInputSenhaConfirm(senhaConfirm)
    })


    botao.addEventListener("click", () => {
        formController.checarInputUsuario(usuario)
        formController.checarInputEmail(email)
        formController.checarInputSenha(senha)
        formController.checarInputSenhaConfirm(senhaConfirm)
        formController.checkForm(form) == true && formController.preencherDados("PUT", id, usuario, email, senha)
    })
}
