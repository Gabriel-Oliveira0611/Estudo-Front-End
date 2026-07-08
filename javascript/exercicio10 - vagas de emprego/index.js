let vagas = [
  {
    nome: "Desenvolvedor Front-end",
    descricao: "Vaga para desenvolvedor front-end",
    dataLimite: "20/09/2026",
    candidatos: ["Gabriel", "Maria"],
  },
  {
    nome: "Desenvolvedor back-end",
    descricao: "Vaga para desenvolvedor back-end",
    dataLimite: "20/08/2026",
    candidatos: ["Pedro", "Adalto"],
  },
];

function listarVagas() {
  let vagasEmTexto = vagas.reduce(function (textoFinal, vaga, index) {
    textoFinal += `
    ${index}. ${vaga.nome}. Candidatos inscritos: ${vaga.candidatos.length}`;

    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function criarVaga() {
  let nome = prompt("Informe o nome da vaga.");
  let descricao = prompt("Informe a descrição da vaga.");
  let dataLimite = prompt("Informe a data limite da vaga. (dd/mm/aaa)");

  let confirmacao = confirm(`
    Deseja criar uma vaga com as seguintes informações?

    -> Nome: ${nome}
    -> Descrição: ${descricao}
    -> Data limite: ${dataLimite}
    `);

  if (confirmacao) {
    let novaVaga = {
      nome,
      descricao,
      dataLimite,
      candidatos: [],
    };

    vagas.push(novaVaga);
    alert("Vaga criada com sucesso.");
  }
}

function visualizarVaga() {
  let index = prompt("Informe o índice da vaga.");
  let vaga = vagas[index];

  let candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato,
  ) {
    textoFinal += `--> ${candidato}
    `;

    return textoFinal;
  }, "");

  alert(`
    Segue abaixo os dados da vaga selecionada:

    -> Nome: ${vaga.nome}
    -> Descrição: ${vaga.descricao}
    -> Data limite: ${vaga.dataLimite}
    -> Candidatos:
    ${candidatosEmTexto}
    `);
}

function inscreverCandidato() {
  let nome = prompt("Informe o nome do candidato.");
  let index = prompt("Informe o índice da vaga desejada.");

  let vaga = vagas[index];
  let candidatosEmtexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato,
  ) {
    textoFinal += `--> ${candidato}
    `;

    return textoFinal;
  }, "");

  let confirmacao = confirm(`
    Deseja inscrever o(a) candidato(a) ${nome} na vaga abaixo?

    -> Nome da vaga: ${vaga.nome}
    -> Descrição: ${vaga.descricao}
    -> Data limite: ${vaga.dataLimite}
    -> Candidatos inscritos:
    ${candidatosEmtexto}
    `);

  if (confirmacao) {
    vaga.candidatos.push(nome);
    alert("Candidato(a) inscrito com sucesso!");
  }
}

function excluirVaga() {
  let index = prompt("Informe o índice a vaga a ser excluída.");
  let vaga = vagas[index];

  let candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato,
  ) {
    textoFinal += `--> ${candidato}
    `;

    return textoFinal;
  }, "");

  let confirmacao = confirm(`
    Deseja excluir a vaga abaixo?

    -> Nome: ${vaga.nome}
    -> Descrição: ${vaga.descricao}
    -> Data limite: ${vaga.dataLimite}
    -> Candidatos inscritos:
    ${candidatosEmTexto}
    `);

  if (confirmacao) {
    vagas.splice(index, 1);
    alert("Vaga excluída com sucesso.");
  }
}

function executar() {
  let escolha = "";
  do {
    escolha = prompt(`
    Seja muito bem-vindo ao sistema de vagas de emprego!
    Escolha uma das opções abaixo:

    -> 1: Listar vagas diponíveis.
    -> 2: Criar nova vaga.
    -> 3: Exibir detalhes de uma vaga.
    -> 4: Inscrever um candidato em uma vaga.
    -> 5: Excluir uma vaga.
    -> 6: Sair.
    `);

    switch (escolha) {
      case "1":
        listarVagas();
        break;

      case "2":
        criarVaga();
        break;

      case "3":
        visualizarVaga();
        break;

      case "4":
        inscreverCandidato();
        break;

      case "5":
        excluirVaga();
        break;

      case "6":
        alert("Encerrando o sistema...");
        break;

      default:
        alert("Opção inválida.");
        break;
    }
  } while (escolha !== "6");
}

executar()