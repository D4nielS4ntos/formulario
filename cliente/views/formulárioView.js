function criarHeader(titulo) {
    const header =    `<section id="head">
                        <h2>${titulo}</h2>
                    </section>`
    return header
}


function criarFormulario() {
    const paginaAlterar = `        
    <form>
        <section class="contentline">
            <label for="username">Nome do usuário</label>
            <input type="text" class="campo" id="username" placeholder="Digite o nome do usuário...">
            <a></a>
        </section>
        <section class="contentline">
            <label for="email">Email</label>
            <input type="text" class="campo" id="email" placeholder="Digite seu email...">
            <a></a>
        </section>
        <section class="contentline">
            <label for="senha">Senha</label>
            <input type="password" class="campo" id="senha" placeholder="Digite sua senha...">
            <a></a>
        </section>
        <section class="contentline">
            <label for="senhaconfir">Confirmação de senha</label>
            <input type="password" class="campo" id="senhaconfirm" placeholder="Digite sua senha novamente...">
            <a></a>
        </section>
        <section id="content" class="contentline">
            <button id="cadastro" type="button">Cadastrar</button>
        </section>
    </form>`
    return paginaAlterar
}

const formulario = {
    criarHeader,
    criarFormulario
}

export default formulario