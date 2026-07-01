let vagas = [];

function listarVagas() {
  let resumoVagas = vagas.reduce(function (valorAcumulado, vaga, indice) {
    valorAcumulado += indice + ". ";
    valorAcumulado += vaga;
    valorAcumulado += " (" + candidatos.length + ")\n";
    return valorAcumulado;
  }, "");

  alert(resumoVagas);
}

function criarVaga() {
  let nome = prompt("Qual é o nome da vaga?");
  let descricao = prompt("Qual é a descrição da vaga?");
  let dataLimite = prompt("Qual é a data limite da vaga?");

  let confirmacao = confirm(
    `
    Deseja criar uma vaga com as seguintes informações?

    -> Nome: ${nome}
    -> Descrição: ${descricao}
    -> Data limite: ${dataLimite}
    `,
  );

  if (confirmacao) {
    let novaVaga = {
      nome,
      descricao,
      dataLimite,
      candidatos: [],
    };
    vagas.push(novaVaga);
    alert("Vaga criada com sucesso!");
  }
}
