
function criarLinha(element) {
    const { id, nome, email, senha } = element
    const dadosUsuario =  `
    <tr id="usuario${id}">
        <td class="center">${id}</td>
        <td>${nome}</td>
        <td>${email}</td>
        <td class="right">${senha}</td>
        <td class="botão right">
            <button class="altbutton" altbutton-id="${id}">Alterar</button>
        </td>
        <td class="botão">
            <button class="delbutton" delbutton-id="${id}">Deletar</button>
        </td>
    </tr>`
    return dadosUsuario
}


function criarTabela() {
    const tabela = `
    <section class="contentline">
        <table>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Conta</th>
                <th>senha</th>
            </tr>
        </table>
    </section>`
    return tabela
}

const edit = {
    criarLinha,
    criarTabela
}

export default edit