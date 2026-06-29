let vagas = [];

function listarVagas() {
  let vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textofinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + candiddos.length + "\n";

    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function criarVaga() {
  let nome = prompt("Qual é o nome da vaga?");
  let descricao = prompt("Qual é a descrição da vaga?");
  let dataLimite = prompt("Informe uma data limite. (dd/mm/aaaa) para a vaga");
  let confirmacao = confirm(
    `
    Deseja criar uma nova vaga com as seguintes informações?
    -> Nome: ${nome}
    -> Descrição: ${descricao}
    -> Data limite: ${dataLimite}
    `,
  );

  if (confirmacao) {
    let novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("vaga criada!");
  }
}

function exibirVaga() {
  let indice = prompt("Informe o indice da vaga que deseja exibir:");
  let vaga = vagas[indice];

  let candidatosEmTexto = vaga.candidatos.reduce(function())
}
