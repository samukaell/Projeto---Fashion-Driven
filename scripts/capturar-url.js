const urltela = document.querySelector(".imagem-fornecida");
urltela.querySelector("form").addEventListener("submit", event =>{
    console.log("Formato da image aceito!");  
    event.preventDefault();
    const url = urltela.querySelector(".input-image").value;
    DADOS.image = url;  
    verificarSelecaoModelos();
    if(verificarSelecaoModelos()){ 
        enviarDadosApi();
    }
});

function verificarSelecaoModelos(){
    const botao = document.querySelector(".botao");
    if( validarNaoNullUndefined(DADOS.model) && 
        validarNaoNullUndefined(DADOS.neck)  && 
        validarNaoNullUndefined(DADOS.material)
    ){  

        botao.classList.remove("botao-bloqueado");
        botao.classList.add("botao-desbloqueado");
        return true;
    }else{
        carregarTelaErro("Você esqueceu de selecionar as opções do seu pedido!");
        return false;
    }
    
}

