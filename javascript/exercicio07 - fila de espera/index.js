let pacientes = [
  "Gabriel",
  "Roberto",
  "Adalto",
  "Maria",
  "Luiz",
  "Ana",
  "Miguel",
];

let novoPaciente = "";
let pacienteConsultado = "";
let escolha = "";

do {
  let fila = "";

  for (let i = 0; i < pacientes.length; i++) {
    fila += i + 1 + "° -> " + pacientes[i] + "\n";
  }

  escolha = prompt(
    "Seja muito bem-vindo ao consultório\n" +
      "Segue abaixo os dados da fila:\n\n" +
      fila +
      "\n\nEscolha uma das opções abaixo:" +
      "\n-> 1: Novo paciente" +
      "\n-> 2: Consultar paciente" +
      "\n-> 3: Sair",
  );

  switch (escolha) {
    case "1":
      novoPaciente = prompt("Insira o nome do novo paciente:");
      pacientes.push(novoPaciente);
      break;

    case "2":
      pacienteConsultado = pacientes.shift();
      alert(pacienteConsultado + " foi atendido!");
      break;

    case "3":
      alert("Encerrando o sistema...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (escolha !== "3");
