function calcularSoma(...numeros) {
  let soma = 0;
  for (let numero of numeros) {
    soma += numero;
  }

  return soma;
}

console.log(calcularSoma(50, 6, 9, 4, 5));

function calcularMedia(...numeros) {
  let soma = 0;
  for (let numero of numeros) {
    soma += numero;
  }

  return soma / numeros.length;
}

let numeros = [100, 200, 300, 400, 50, 60, 70, 80, 90, 1000];
let media = calcularMedia(...numeros);
console.log(`A média dos números do array é: ${media}`);
