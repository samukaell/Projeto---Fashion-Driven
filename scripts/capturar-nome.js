function validacaoFormNomeUser(){
    const telaCadastro = document.querySelector(".tela-cadastro");

    telaCadastro.querySelector("form").addEventListener("submit", event =>{
        console.log("Bem vindo!");  
        event.preventDefault();

        const nome = telaCadastro.querySelector(".nome-usuario").value;
        DADOS.owner = nome;
        DADOS.author = nome;
        desativarTelaCadastro();
    });
}
carregarTelaCadastro();
validacaoFormNomeUser();