function componentePedido(imagem,criador){
    let pedido = `
    <div class="peca">
        <img src="${imagem}" alt="camisa de ${criador}">
        <p>Criador: ${criador}</p>
    </div>
    `

    return pedido;
}