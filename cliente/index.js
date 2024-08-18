import formView from "./views/formulárioView.js"
import formController from "./controllers/formController.js"


let main = document.querySelector('main')
main.innerHTML += formView.criarHeader("Nova Conta")
main.innerHTML += formView.criarFormulario()

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
    formController.checkForm(form) == true && formController.preencherDados("POST", "AUTOMÁTICO", usuario, email, senha)
})
