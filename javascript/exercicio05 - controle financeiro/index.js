let saldo = parseFloat(prompt("Insira aqui seu saldo inicial"));
let adicao = 0;
let remocao = 0;

let escolha = "";

do {
  escolha = prompt(
    "Seja muito bem-vindo ao controle financeiro!\n" +
      "\nEscolha uma das opções abaixo:\n" +
      "Seu saldo atual é de R$" +
      saldo +
      "\n" +
      "\n-> 1 - Adicionar dinheiro" +
      "\n-> 2 - Remover dinheiro" +
      "\n-> 3 - Sair",
  );

  switch (escolha) {
    case "1":
      adicao = parseFloat(
        prompt(
          "Pois bem, insira a quantidade de dinheiro que você quer adicionar:",
        ),
      );
      saldo += adicao;
      break;

    case "2":
      remocao = parseFloat(
        prompt(
          "Pois bem, insira a quantidade de dinheiro que você quer remover:",
        ),
      );
      saldo -= remocao;
      break;

    case "3":
      alert("Encerrando o sistema...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (escolha !== "3");
