function carregarUltimoPedidos(){
    const roupas = document.querySelector(".roupas-on");
    const tamanhoBanco = BANCO.length;

    let pedidos = ''
    for(let i = tamanhoBanco; i>tamanhoBanco-5;i--){
        pedidos = pedidos +  componentePedido(BANCO[i].image,BANCO[i].author);
    }

    roupas.innerHTML = pedidos;
}