function mostrarProjeto(projetoId) {
    const projetos = document.querySelectorAll('.projeto');
    
    projetos.forEach(projeto => {
        projeto.classList.remove('ativo');
    });

    const projetoAtivo = document.getElementById(projetoId);
    projetoAtivo.classList.add('ativo');
}
