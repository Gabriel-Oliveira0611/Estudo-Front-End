let primeiroNumero = parseFloat(prompt("Insira o primeiro numero"));
let segundoNumero = parseFloat(prompt("Insira o segundo numero"));

let soma = primeiroNumero + segundoNumero;
let subtracao = primeiroNumero - segundoNumero;
let multiplicacao = primeiroNumero * segundoNumero;
let divisao = primeiroNumero / segundoNumero;

alert(
  "Esses foram os resultados:\n" +
    "\n-> Soma: " +
    primeiroNumero +
    " + " +
    segundoNumero +
    " = " +
    soma +
    "\n-> Subtração: " +
    primeiroNumero +
    " - " +
    segundoNumero +
    " = " +
    subtracao +
    "\n-> Multilicação: " +
    primeiroNumero +
    " x " +
    segundoNumero +
    " = " +
    multiplicacao +
    "\n-> Divisão: " +
    primeiroNumero +
    " / " +
    segundoNumero +
    " = " +
    divisao,
);
