let vagas = [
  {
    nome: "Desenvolvedor front-end",
    descricao: "Vaga para desenvolvedor Front-end",
    dataLimite: "08/08/2026",
    candidatos: ["Gabriel", "Maria"],
  },
  {
    nome: "Desenvolvedor back-end",
    descricao: "Vaga para desenvolvedor back-end",
    dataLimite: "08/08/2026",
    candidatos: ["Pedro", "Adalto"],
  },
];

function listarVagas() {
  let vagasEmTexto = vagas.reduce(function (textoFinal, vaga, index) {
    textoFinal += `
    ${index} - ${vaga.nome}. Candidatos inscritos: ${vaga.candidatos.length}`;

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
  } else {
    alert("A vaga não foi criada.");
  }
}

function visualizarVaga() {
  let vagasEmTexto = vagas.reduce(function (textoFinal, vaga, index) {
    textoFinal += `${index} - ${vaga.nome}.
    `;

    return textoFinal;
  }, "");

  let index = prompt(`
    Informe o índice da vaga.

    ${vagasEmTexto}
    `);
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
    Segue abaixo as informações da vaga.

    -> Nome: ${vaga.nome}
    -> Descrição: ${vaga.descricao}
    -> Data limite: ${vaga.dataLimite}
    -> Candidatos inscritos: 
    ${candidatosEmTexto}
    `);
}

function inscreverCandidato() {
  let vagasEmTexto = vagas.reduce(function (textoFinal, vaga, index) {
    textoFinal += `${index} - ${vaga.nome}.
    `;

    return textoFinal;
  }, "");

  let nome = prompt("Informe o nome do candidato.");
  let index = prompt(`
    Informe o índice da vaga.

    ${vagasEmTexto}
    `);
  let vaga = vagas[index];

  let confirmacao = confirm(`
    Deseja inscrever o(a) candidato(a) ${nome} na vaga abaixo?

    -> Nome da vaga: ${vaga.nome}
    -> Descrição: ${vaga.descricao}
    -> Data limite: ${vaga.dataLimite}
    -> Candidatos inscritos: ${vaga.candidatos.length}
    `);

  if (confirmacao) {
    vaga.candidatos.push(nome);
    alert(`Candidato(a) inscrito(a) com sucesso.`);
  } else {
    alert(`O(A) candidato(a) não foi inscrito(a).`);
  }
}

function excluirVaga() {
  let vagasEmTexto = vagas.reduce(function (textoFinal, vaga, index) {
    textoFinal += `${index} - ${vaga.nome}.
    `;

    return textoFinal;
  }, "");

  let index = prompt(`
    Informe o índice da vaga a ser deletada:

    ${vagasEmTexto}
    `);

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
    alert("A vaga foi excluída.");
  } else {
    alert("A vaga não foi excluída.");
  }
}

function executar() {
  let escolha = "";
  do {
    escolha = prompt(`
    Seja muito bem-vindo ao sistema de vagas de emprego!
    Escolha uma das opções abaixo:

    -> 1: Listar vagas disponíveis.
    -> 2: Criar uma vaga.
    -> 3: Exibir detalhes de uma vaga.
    -> 4: Inscrever um candidato em uma vaga.
    -> 5: Excluir uma vaga.
    -> 6: Sair
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
        alert("Enxerrando o sistema...");
        break;

      default:
        alert("Opção inválida.");
        break;
    }
  } while (escolha !== "6");
}

executar();
