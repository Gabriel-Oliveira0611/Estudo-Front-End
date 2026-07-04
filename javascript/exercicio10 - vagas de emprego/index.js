// Sistema de Vagas de Emprego
// Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

// Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
// Listar vagas disponíveis
// Criar um nova vaga
// Visualizar uma vaga
// Inscrever um candidato em uma vaga
// Excluir uma vaga
// Sair
// A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
// A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
// A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
// A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
// A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.
// Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.

let vagas = [
  {
    nome: "Desenvolvedor front-end",
    descricao: "Vaga para desenvolvedor front-end",
    dataLimite: "05/02/2027",
    candidatos: ["Gabriel", "Maria"],
  },
  {
    nome: "Desenvolvedor back-end",
    descricao: "Vaga para desenvolvedor back-end",
    dataLimite: "05/02/2027",
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

function cadastrarVaga() {
  let nome = prompt("Informe o nome da vaga");
  let descricao = prompt("Informe a descrição da vaga");
  let dataLimite = prompt("Informe a data limite da vaga (dd/mm/aaa)");

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
    alert("Vaga criada.");
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
    Segue abaixo os dados da vaga:

    -> Nome: ${vaga.nome}
    -> Descrição: ${vaga.descricao}
    -> Data limite: ${vaga.dataLimite}
    -> Candidatos inscritos:
    ${candidatosEmTexto}
    `);
}

function inscreverCandidato() {
  let nomeCandidato = prompt("Informe o nome do candidato.");
  let index = prompt("Informe o índice da vaga.");
  let vaga = vagas[index];

  let confirmacao = confirm(`
    Deseja inscrever o(a) candidato(a) ${nomeCandidato} na vaga abaixo?

    -> Nome: ${vaga.nome}
    -> Descrição: ${vaga.descricao}
    -> Data limite: ${vaga.dataLimite}
    -> Número de candidatos inscritos: ${vaga.candidatos.length}
    `);

  if (confirmacao) {
    vaga.candidatos.push(nomeCandidato);
    alert(`
        O(a) candidato(a) ${nomeCandidato} foi inscrto na vaga abaixo:

        ${vaga.nome}
        `);
  }
}

function excluirVaga() {
  let index = prompt("Informe o índice da vaga a ser excluída.");
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

    -> Nome ${vaga.nome}
    -> Descrição: ${vaga.descricao}
    -> Data limite: ${vaga.dataLimite}
    -> Candidatos inscritos: 
    ${candidatosEmTexto}
    `);

    if (confirmacao) {
      vagas.splice(index, 1)
      alert("Vaga excluída.")
    }
}

function executar() {
  let escolha = "";
  do {
    escolha = prompt(`
    Seja muito bem-vindo ao sistema de vagss de emprego!

    Escolha uma das opções abaixo:
    -> 1: Listar vagas.
    -> 2: Cadastrar nova vaga.
    -> 3: Visualizar vaga.
    -> 4: Inscrever um candidato para uma vaga.
    -> 5: Excluir uma vaga.
    -> 6: Sair.
    `);

    switch (escolha) {
      case "1":
        listarVagas();
        break;

      case "2":
        cadastrarVaga();
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
        break;
    }
  } while (escolha !== "6");
}

executar();
