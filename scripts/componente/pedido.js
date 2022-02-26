function componentePedido(imagem,criador,id){
    let pedido = `
    <div class="peca" data-id="${id}" onclick="capturarID(this)">
        <img src="${imagem}" alt="camisa de ${criador}">
        <p>Criador: ${criador}</p>
        
    </div>
    `
    return pedido;
}
function capturarID(elemento){
    let id = elemento.getAttribute('data-id');
    if(id !== null){
        IDSELECIONADO = id;       
        capturarPedido();
        console.log("ID->" + IDSELECIONADO);
    }   
}

function capturarPedido(){
    BANCO.forEach(element => {
        if(element.id == IDSELECIONADO){
            DADOS.model = element.model;
            DADOS.neck = element.neck;
            DADOS.material = element.material;
            DADOS.image = element.image;
            //dados com o nome do autor ou do usuario?
            //DADOS.owner = element.owner;
            //DADOS.author = element.owner;

            let input = document.querySelector(".input-image");
            input.value = element.image;

            carregarTelaConfirmcao(DADOS,"Esta roupa foi carregada, basta confirmar o pedido");
        }
    });
}
