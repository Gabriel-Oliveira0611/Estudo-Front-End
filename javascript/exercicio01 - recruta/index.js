let primeiroNome = prompt("Insira aqui seu primeiro nome:");
let sobrenome = prompt("Insira seu sobrenome:");
let campoDeEstudo = prompt("Insira seu campo de estudo:");
let anoDeNascimento = parseInt(prompt("Insira seu ano de nascimento"));
let idade = 2026 - anoDeNascimento;

alert(
  "Segue abaixo seus dados:\n\n" +
    "-> Nome: " +
    primeiroNome +
    " " +
    sobrenome +
    "\n-> Campo de estudo: " +
    campoDeEstudo +
    "\n-> Idade: " +
    idade +
    " anos.",
);

