function selecionarRoupa(elemento,modelo){
    const corpo = document.querySelector("."+modelo);
    const pecaAnteior = corpo.querySelector(".selecionado");
    if(pecaAnteior !== null){
        pecaAnteior.classList.remove("selecionado");
    }
    const borda = elemento.querySelector(".image");
    borda.classList.add("selecionado");

    capturarModeloSelecionado(elemento,modelo);
}

function capturarModeloSelecionado(elemento,modelo){
    const nome = elemento.querySelector(".nome").innerHTML;
    switch(modelo){
        case 'camisa':
            DADOS.model = nome;
            break;
        case 'gola':
            DADOS.neck = nome;
            break;
        case 'tecido':
            DADOS.material = nome;
    }
}
