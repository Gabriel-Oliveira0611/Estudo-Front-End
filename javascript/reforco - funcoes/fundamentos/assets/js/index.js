// Função simples
function soma() {
  let primeiroNumero = 20;
  let segundoNumero = 30;
  console.log(primeiroNumero + segundoNumero);
}

soma();

console.log("-------------------------------------");

// Parâmetros
function multiplica(valor1 = 0, valor2 = 0) {
  let resultado = valor1 * valor2;
  console.log(`O resultado da função é ${resultado}`);
}

multiplica(2, 10);
multiplica(50, 60);
multiplica();

console.log("-------------------------------------");

// Gera um erro, pois a variavel resultado, até então, só foi declarada dentro do contexto de uma função
// console.log(resultado);

function subtrair(valor1, valor2) {
  return valor1 - valor2;
}

const resultadoFuncao = subtrair(45, 40);
console.log(resultadoFuncao);

// Mais exemplos de funções

function encontrarMaiorMenor() {
  let maior = 0;
  let menor = 100;

  // Gerar 10 números aleatórios entre 1 e 100
  for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 100) + 1;
    console.log(`Número gerado: ${num}`);

    // Compara o número gerado com o atual maio/menor número
    if (num > maior) {
      maior = num;
    } else if (num < menor) {
      menor = num;
    }
  }

  console.log(`O maior número encontrado foi: ${maior}`);
  console.log(`O menor número encontrado foi: ${menor}`);
}

encontrarMaiorMenor();

console.log("-------------------------------------");

// Outro exemplo:
function calcularRendimento(valor, taxaJuros, tempo) {
  for (let i = 1; i <= tempo; i++) {
    valor += valor * taxaJuros;
    console.log(`Rendimento no ${i}°. mês: R$ ${valor.toFixed(2)}`);
  }
}

calcularRendimento(1000, 0.05, 5);

console.log("-------------------------------------");

// Com retorno

function calcularPrecoUber(distancia, tempo) {
  const valorBase = 2.5;
  const valorKm = 1.3;
  const valorMin = 0.26;

  const precoDistancia = distancia * valorKm;
  const precoTempo = tempo * valorMin;
  const precoTotal = valorBase + precoDistancia + precoTempo;

  return precoTotal.toFixed(2);
}

let valorCorrida = calcularPrecoUber(40,10)
console.log(`Sua viagem ficará em: R$ ${valorCorrida}`);

