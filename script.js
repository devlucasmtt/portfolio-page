const projetos = [
    "Projeto 1: Descrição do projeto 1",
    "Projeto 2: Descrição do projeto 2",
    "Projeto 3: Descrição do projeto 3",
    "Projeto 4: Descrição do projeto 4",
    "Projeto 5: Descrição do projeto 5",
    "Projeto 6: Descrição do projeto 6",
    "Projeto 7: Descrição do projeto 7",
    "Projeto 8: Descrição do projeto 8",
    "Projeto 9: Descrição do projeto 9",
    "Projeto 10: Descrição do projeto 10"
];

let indiceAtual = 0;

const atualizarCarrossel = () => {
    const projetosDiv = document.querySelector('.projetos');
    projetosDiv.innerHTML = `<div>${projetos[indiceAtual]}</div>`;
    // Adiciona a transformação ao carrossel
    const translateX = -indiceAtual * 300; // 300 é a largura do projeto
    projetosDiv.style.transform = `translateX(${translateX}px)`;
}

document.getElementById('next').addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % projetos.length;
    atualizarCarrossel();
});

document.getElementById('prev').addEventListener('click', () => {
    indiceAtual = (indiceAtual - 1 + projetos.length) % projetos.length;
    atualizarCarrossel();
});

// Inicializar o carrossel
atualizarCarrossel();
