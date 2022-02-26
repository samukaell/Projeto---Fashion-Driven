const APIPOST = "https://mock-api.driven.com.br/api/v4/shirts-api/shirts";

function enviarDadosApi(){
    const requisicao = axios.post(APIPOST, DADOS);
    requisicao.then(tratarSucessoEnvio);
    requisicao.catch(tratarErroEnvio);
}
function tratarSucessoEnvio(response){
    console.log("Seu Pedido foi enviado com sucesso meu amigo estilista :)");
    buscarDados();
    carregarTelaConfirmcao(DADOS,"Confirmar Pedido");
}

function tratarErroEnvio(erro) {
    console.log("Status code: " + erro.response.status);
    console.log("Mensagem de erro: " + erro.response.data);
    console.log("Calma nosso melhores batatas dev estão mexendo nos cabos, confie :)");
    carregarTelaErro("Ops, não conseguimos processar sua encomenda! :(");
}