// --- REQUISITO: ALERTAS E PROMPTS ---
window.onload = function() {
    const nome = prompt("Bem-vindo! Qual é o seu nome?");
    const boasVindas = document.getElementById("boas-vindas");
    
    if (nome) {
        boasVindas.innerText = `Olá, ${nome}! Complete os testes abaixo:`;
        console.log(`Usuário logado: ${nome}`);
    } else {
        boasVindas.innerText = "Olá, visitante! Complete os testes abaixo:";
    }
};

// --- REQUISITO: MANIPULAÇÃO DE IMAGENS (SLIDESHOW) ---
const imagens = [
    "https://picsum.photos/id/10/600/300",
    "https://picsum.photos/id/20/600/300",
    "https://picsum.photos/id/30/600/300"
];
let index = 0;
const slideImg = document.getElementById("slide");

document.getElementById("proximo").addEventListener("click", () => {
    index = (index + 1) % imagens.length;
    slideImg.src = imagens[index];
});

document.getElementById("anterior").addEventListener("click", () => {
    index = (index - 1 + imagens.length) % imagens.length;
    slideImg.src = imagens[index];
});

// --- REQUISITO: VALIDAÇÃO DE FORMULÁRIO E EVENTOS DO DOM ---
const form = document.getElementById("form-login");
const feedback = document.getElementById("mensagem-feedback");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio real

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    // Validação simples (requisito)
    if (usuario === "" || senha === "") {
        alert("Erro: Preencha todos os campos do formulário!");
        feedback.innerText = "Campos obrigatórios não preenchidos.";
        feedback.style.color = "red";
    } else {
        alert("Sucesso! Validando informações...");
        feedback.innerText = `Login realizado para: ${usuario}`;
        feedback.style.color = "green";
        
        // Manipulação dinâmica de elemento (mudando a cor do fundo da seção)
        document.getElementById("form-login").parentElement.style.backgroundColor = "#e8f5e9";
    }
});