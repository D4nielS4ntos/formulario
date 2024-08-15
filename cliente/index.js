import fm from "./views/formulárioView.js"


let main = document.querySelector('main')
main.innerHTML += fm.criarHeader("Nova Conta")
main.innerHTML += fm.criarFormulario()

let form = document.querySelector('form')
let usuario = document.querySelector('input#username')
let email = document.querySelector('input#email')
let senha = document.querySelector('input#senha')
let senhaConfirm = document.querySelector('input#senhaconfirm')
let botao = document.querySelector('button#cadastro')
let dados = {
    usuario: "",
    email: "",
    senha: ""
}


usuario.addEventListener("blur", () => {
    checarInputUsuario()
})


email.addEventListener("blur", () => {
    checarInputEmail()
})


senha.addEventListener("blur", () => {
    checarInputSenha()
})


senhaConfirm.addEventListener("blur", () => {
    checarInputSenhaConfirm()
})


botao.addEventListener("click", () => {
    checarInputUsuario()
    checarInputEmail()
    checarInputSenha()
    checarInputSenhaConfirm()
    checkForm() == true && preencherDados()
})


function checarInputUsuario() {
    if (usuario.value === "") {
        mensagemErro(usuario, "Preencha um nome de usuário!")
    } else {
        usuario.className = "campo"
        let formItem = usuario.parentElement
        let textMessage = formItem.querySelector("a")
        textMessage.style.display = "none"
    }
}


function checarInputEmail() {
    if (email.value === "") {
        mensagemErro(email, "Preencha um email!")
    } else {
        email.className = "campo"
        let formItem = email.parentElement
        let textMessage = formItem.querySelector("a")
        textMessage.style.display = "none"
    }
}


function checarInputSenha() {
    if (senha.value === "") {
        mensagemErro(senha, "Preencha uma senha!")
    } else if (senha.value.length < 8) {
        mensagemErro(senha, "A senha deve ter pelo menos 8 caracteres!")
    } else {
        senha.className = "campo"
        let formItem = senha.parentElement
        let textMessage = formItem.querySelector("a")
        textMessage.style.display = "none"
    }
}


function checarInputSenhaConfirm() {
    if (senhaConfirm.value === "") {
        mensagemErro(senhaConfirm, "Confirme sua senha!")
    } else if (senhaConfirm.value !== senha.value) {
        mensagemErro(senhaConfirm, "Os valores das senhas estão diferentes.")
    } else {
        senhaConfirm.className = "campo"
        let formItem = senhaConfirm.parentElement
        let textMessage = formItem.querySelector("a")
        textMessage.style.display = "none"
    }
}


function mensagemErro(campo, mensagem) {
    let formItem = campo.parentElement
    let textMessage = formItem.querySelector("a")
    textMessage.innerHTML = mensagem
    textMessage.style.display = "block"
    textMessage.style.visibility = "visible"
    campo.className = "campo erro"
}


function checkForm() {
    let formItens = form.querySelectorAll(".campo")
    let valido = [...formItens].every( (item) => {
            return item.className === "campo"
        }
    )
    return valido
}


function preencherDados() {
    dados.usuario = usuario.value
    dados.email = email.value
    dados.senha = senha.value
    postDados(dados)
}


function postDados(dados) {
    fetch("/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .catch(erro => console.log(erro))
}
