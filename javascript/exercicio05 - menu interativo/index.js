let opcao = "";

do {
  opcao = prompt(
    "\nEscolha uma das opções abaixo:\n" +
      "\n-> Opção 1" +
      "\n-> Opção 2" +
      "\n-> Opção 3" +
      "\n-> Opção 4" +
      "\n-> Opção 5 - Encerrar",
  );

  switch (opcao) {
    case "1":
      alert("Opção escolhida: " + opcao);
      break;

    case "2":
      alert("Opção escolhida: " + opcao);
      break;

    case "3":
      alert("Opção escolhida: " + opcao);
      break;

    case "4":
      alert("Opção escolhida: " + opcao);
      break;

    case "5":
      alert("Encerrando...");
      break;

    default:
      break;
  }
} while (opcao !== "5");
