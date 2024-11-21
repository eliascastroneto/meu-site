// Adiciona um efeito de scroll suave para o link "Ver Projetos"
document.getElementById('verProjetos').addEventListener('click', function(e) {
    e.preventDefault(); // Impede o comportamento padrão de navegação
  
    // Obtém a posição da seção de projetos
    const projetosSection = document.getElementById('projetos');
  
    // Faz a rolagem suave até a seção de projetos
    projetosSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
  