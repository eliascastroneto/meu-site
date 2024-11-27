const projetos = [
  { titulo: "Gateway de Pagamento", descricao: "Sistema de pagamento via PIX, com integração de QR code e opções de pagamento via cartão de crédito/débito." },
  { titulo: "Implementação do PIX", descricao: "Solução para pagamento por QR Code com integrações financeiras." },
  { titulo: "Integração Caixa Econômica", descricao: "Integração com a Caixa Econômica Federal para facilitar o pagamento via CPF." },
  { titulo: "Sistema de Conselheiros", descricao: "Gestão de conselheiros na Secretaria de Saúde de Fortaleza, facilitando a administração de reuniões e atas." },
  { titulo: "Controle de Cestas Básicas", descricao: "Sistema de controle de entregas de cestas básicas para ONGs, digitalizando o processo de controle de entregas." },
  { titulo: "Dashboard de Saúde", descricao: "Criação de dashboards para monitoramento de leitos, medicamentos e transferências de pacientes." },
  { titulo: "Sistema SAMU", descricao: "Sistema automatizado para coleta de dados de atendimentos do SAMU e integração com o DPVAT." },
  { titulo: "Integração Saúde e Educação", descricao: "Integração entre a Secretaria de Saúde e Educação para monitoramento de vacinas faltantes nos alunos." }
];

const certificados = [
  { titulo: "Scrum Master", descricao: "Curso de Scrum Master, com foco em metodologias ágeis e gestão de equipes de alta performance." },
  { titulo: "Product Owner", descricao: "Certificação como Product Owner, capacitação em gerenciamento de produtos e desenvolvimento de soluções." },
  { titulo: "Agile Practitioner", descricao: "Curso sobre práticas ágeis, com foco em melhoria contínua e entrega de valor." },
  { titulo: "Engenharia de Software", descricao: "Certificação em engenharia de software, abordando design, desenvolvimento e manutenção de sistemas." },
  { titulo: "Análise de Requisitos", descricao: "Curso focado em análise de requisitos, levantamento e documentação de processos de TI." }
];

function renderPaginacao(lista, containerId, itemsPorPagina) {
  const container = document.querySelector(`#${containerId}`);
  const totalPaginas = Math.ceil(lista.length / itemsPorPagina);
  let paginaAtual = 1;

  function renderPagina() {
    const inicio = (paginaAtual - 1) * itemsPorPagina;
    const fim = inicio + itemsPorPagina;
    const itensPagina = lista.slice(inicio, fim);

    const listaContainer = document.querySelector(`.${containerId.split('-')[0]}-lista`);
    listaContainer.innerHTML = itensPagina
      .map(item => `<div class="item"><h3>${item.titulo}</h3><p>${item.descricao}</p></div>`)
      .join("");

    container.innerHTML = Array.from({ length: totalPaginas }, (_, i) => `
      <button class="btn-pagina ${paginaAtual === i + 1 ? 'ativo' : ''}" 
              onclick="alterarPagina(${i + 1})">${i + 1}</button>
    `).join("");
  }

  window.alterarPagina = (pagina) => {
    paginaAtual = pagina;
    renderPagina();
  };

  renderPagina();
}

renderPaginacao(projetos, "projetos-paginacao", 2);
renderPaginacao(certificados, "certificados-paginacao", 3);
