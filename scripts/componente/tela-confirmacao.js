function criarTelaConfirmcao(roupa){
    let telaConfirmcao = `
    <div class="caixa-confirmacao">
        <p class="titulo">Confirmar Pedido</p>
        <div class="camisa-confirmada">
            <img src="${roupa.image}" class="camisa-conf">
            <p class="modelo-conf"><strong>Modelo :</strong> ${roupa.model}</p>
            <p class="gola-conf"><strong>Gola :</strong> ${roupa.neck}</p>
            <p class="material-conf"><strong>Material :</strong> ${roupa.material}</p>
        </div>
        <button class="botao-confirmacao" onclick="desativarTelaConfirmcao()">OK!</button>
    </div>
    `;

    return telaConfirmcao;
}

function carregarTelaConfirmcao(roupa){
    const tela = document.querySelector(".tela-confimacao");
    tela.classList.remove("hidden");
    tela.innerHTML = criarTelaConfirmcao(roupa);
}

function desativarTelaConfirmcao(){
    const tela = document.querySelector(".tela-confimacao");
    tela.classList.add("hidden");
}