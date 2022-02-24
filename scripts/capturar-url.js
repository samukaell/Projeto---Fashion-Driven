function validacaoForm(){

    document.querySelector("form").addEventListener("submit", event =>{
        console.log("Formato da image aceito!");  
        event.preventDefault();
        const url = document.querySelector(".input-image").value;
        DADOS.image = url;  
        verificarSelecaoModelos();
    });
}
validacaoForm();

function verificarSelecaoModelos(){
    const botao = document.querySelector(".botao");
    if( validarNaoNullUndefined(DADOS.model) && 
        validarNaoNullUndefined(DADOS.neck)  && 
        validarNaoNullUndefined(DADOS.material)
    ){  
        // console.log("model ->"+DADOS.model);
        // console.log("neck ->"+DADOS.neck);
        // console.log("material ->"+DADOS.material);

        botao.classList.remove("botao-bloqueado");
        botao.classList.add("botao-desbloqueado");
    }
}


