const telaCadastro = `
<div class="cadastro">
    <div class="logo-cadastro">
        <img src="./midia/Group 189.png" alt="Logo">
    </div>
    <div class="caixa-input">
        <p class="titulo">Bem Vindo</p>
        <form action="">
            <p class="texto">Qual o seu nome?</p>
            <input class="nome-usuario" type="text" minlength="3" placeholder="Ex: Samuel" required>
            <button class="botao-cadastro" type="submit">Confirmar</button>
        </form>
    </div>
</div>
`;

function carregarTelaCadastro(){
    const tela = document.querySelector(".tela-cadastro");
    tela.innerHTML = telaCadastro;
}

function desativarTelaCadastro(){
    const tela = document.querySelector(".tela-cadastro");
    tela.classList.add("hidden");
}


