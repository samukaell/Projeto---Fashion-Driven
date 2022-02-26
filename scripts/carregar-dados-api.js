const APIGET = "https://mock-api.driven.com.br/api/v4/shirts-api/shirts";
let BANCO = [];

function buscarDados(){
    const promessa = axios.get(APIGET);
    promessa.then(processarResposta);
    promessa.catch(tratarErro);
}

function processarResposta(resposta) {
    console.log("Dados da API carregados com sucesso!");
    BANCO = resposta.data;
    carregarUltimoPedidos();
    
}


function tratarErro(erro) {
    console.log("Status code: " + erro.response.status);
    console.log("Mensagem de erro: " + erro.response.data);
    console.log("Fique calmo nossas melhores Batatas Devs estão cuidado disso")
}

//Carregar os Dados do footer
function carregarUltimoPedidos(){
    const roupas = document.querySelector(".roupas-on");

    //reverse-> .slice().reverse().forEach
    let i = 0
    let pedidos = ''
    BANCO.forEach(element => {
        pedidos = pedidos +  componentePedido(element.image,element.owner,element.id);
        i++;
        if(i==10){
            roupas.innerHTML = pedidos;
            return;
        }
    });
}

buscarDados();
