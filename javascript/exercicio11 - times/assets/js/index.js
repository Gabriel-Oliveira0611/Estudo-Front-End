function escalarJogador() {
  let time = document.getElementById("time");
  let dados = document.createElement("ul");
  dados.id = "dados";
  let jogador = document.createElement("li");

  let posicao = document.getElementById("position").value;
  let name = document.getElementById("name").value;
  let id = document.getElementById("number").value;

  jogador.id = id;

  let confirmacao = confirm(`
    Deseja escalar o jogador abaixo?

    -> Nome: ${name}
    -> Posição: ${posicao}
    -> Número da camisa: ${id}
    `);

  if (confirmacao) {
    jogador.innerText = `Nome: ${name}.
    Posição: ${posicao}.
    Número da camisa: ${id} `;

    dados.appendChild(jogador);
    time.appendChild(dados);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  } else {
  }
}

function removerJogador() {
  let time = document.getElementById("time");
  let dados = document.getElementById("dados");

  let number = document.getElementById("camisa").value;

  let jogador = document.getElementById(number);

  let confirmacao = confirm(`
    Deseja excluir o jogador camisa ${number}?
    `);

  if (confirmacao) {
    dados.removeChild(jogador);
    document.getElementById("camisa").value = "";
  } else {
  }
}
