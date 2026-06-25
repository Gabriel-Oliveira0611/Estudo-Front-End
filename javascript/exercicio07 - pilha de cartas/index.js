let pilha = [
  "carta um",
  "carta dois",
  "carta três",
  "carta quatro",
  "carta cinco",
];

let escolha = "";
let novaCarta = "";
let cartaRemovida = "";

do {
  escolha = prompt(
    "Seja bem-vindo ao baralho!\n" +
      "Esse é o total de cartas no baralho!\n" +
      pilha.length +
      " cartas!\n\n" +
      "Escolha uma das opções abaixo:" +
      "\n-> 1: Adicionar uma carta" +
      "\n-> 2: Puxar uma carta" +
      "\n-> 3: Sair",
  );

  switch (escolha) {
    case "1":
      novaCarta = prompt("Qual é o nome da carta?");
      pilha.unshift(novaCarta);
      break;

    case "2":
      cartaRemovida = pilha.shift();
      alert("A carta removida foi: " + cartaRemovida);
      break;

    case "3":
      alert("Encerrando o sistema...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (escolha !== "3");
