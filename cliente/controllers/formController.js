
function checarInputUsuario(usuario) {
    if (usuario.value === "") {
        mensagemErro(usuario, "Preencha um nome de usuário!")
    } else {
        usuario.className = "campo"
        let formItem = usuario.parentElement
        let textMessage = formItem.querySelector("a")
        textMessage.style.display = "none"
    }
}


function checarInputEmail(email) {
    if (email.value === "") {
        mensagemErro(email, "Preencha um email!")
    } else {
        email.className = "campo"
        let formItem = email.parentElement
        let textMessage = formItem.querySelector("a")
        textMessage.style.display = "none"
    }
}


function checarInputSenha(senha) {
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


function checarInputSenhaConfirm(senhaConfirm) {
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


function checkForm(form) {
    let formItens = form.querySelectorAll(".campo")
    let valido = [...formItens].every( (item) => {
            return item.className === "campo"
        }
    )
    return valido
}


function preencherDados(metodoHttp, id, usuario, email, senha) {
    let dados = {
        id: id,
        usuario: "",
        email: "",
        senha: ""
    }
    dados.usuario = usuario.value
    dados.email = email.value
    dados.senha = senha.value
    metodoHttp === "POST" && postDados(dados)
    metodoHttp === "PUT" && putDados(dados)
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


function putDados(dados) {
    console.table(dados)
    fetch("/cadastrar", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .catch(erro => console.log(erro))
}


async function colocarValoresDeAlterarUsuario(id) {
    let nomeAtual = document.querySelector("input#username")
    let emailAtual = document.querySelector("input#email")
    let senhaAtual = document.querySelector("input#senha")
    try {
        const response = await fetch(`/cadastrar/${id}`)
        const valores = await response.json()
        const { nome, email, senha } = valores[0]
        nomeAtual.value = nome
        emailAtual.value = email
        senhaAtual.value = senha
    } catch (error) {
        console.log("Erro ao tentar carregar valores do usuário " + error)
    }
}

const formController = {
    checarInputUsuario,
    checarInputEmail,
    checarInputSenha,
    checarInputSenhaConfirm,
    checkForm,
    preencherDados,
    colocarValoresDeAlterarUsuario
}

export default formController
