function criarTelaErro(texto){
    telaErro = `
    <div class="caixa-erro">
        <ion-icon class="alerta" name="alert-circle"></ion-icon>
        <p class="titulo">${texto}</p>
        <ion-icon class="recarregar" name="refresh-circle-outline" onclick="desativarTelaErro()"></ion-icon>
    </div>
`;

    return telaErro;
}

function carregarTelaErro(texto){
    const tela = document.querySelector(".tela-erro");
    tela.classList.remove("hidden");
    tela.innerHTML = criarTelaErro(texto);
}

function desativarTelaErro(){
    const tela = document.querySelector(".tela-erro");
    tela.classList.add("hidden");
}
