function escalarJogador() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const camisa = document.getElementById("number").value;

  let confirmacao = confirm(`
    Deseja escalar um jogador com as seguintes informações?

    -> Nome: ${name}
    -> Posição: ${position}
    -> Número da camisa: ${camisa}
    `);

  if (confirmacao) {
    const time = document.getElementById("time");

    const dados = document.createElement("ul");
    const jogador = document.createElement("li");
    jogador.id = Number;
    jogador.innerText = `Nome do jogador: ${name}.
     Posição: ${position}.
     Número da camisa: ${camisa}`;

    time.appendChild(dados);
    dados.appendChild(jogador);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  } else {
  }
}

function removerJogador() {
  const id = document.getElementById("camisa");
}
