
function criarLinha(element) {
    const { id, nome, email, senha } = element
    const dadosUsuario =  `<tr id="usuario${id}">
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

const edit = {
    criarLinha
}

export { criarLinha }
// export default { edit }