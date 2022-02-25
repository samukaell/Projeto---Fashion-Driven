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
            switch(nome){
                case 'T-shirt':
                    DADOS.model = 't-shirt';
                    break;
                case 'Camiseta':
                    DADOS.model = 'top-tank';
                    break;
                case 'Mangalonga':
                    DADOS.model = 'long';
                    break;
            }
        break;
        case 'gola':
            switch(nome){
                case 'Gola V':
                    DADOS.neck = 'v-neck';
                    break;
                case 'Gola Redonda':
                    DADOS.neck = 'round';
                    break;
                case 'Gola Polo':
                    DADOS.neck = 'polo';
                    break;
            }
        break;
        case 'tecido':
            switch(nome){
                case 'Seda':
                    DADOS.material = 'silk';
                    break;
                case 'Algodão':
                    DADOS.material = 'cotton';
                    break;
                case 'Poliester':
                    DADOS.material = 'polyester';
                    break;
            }
        break;
    }

   
}
