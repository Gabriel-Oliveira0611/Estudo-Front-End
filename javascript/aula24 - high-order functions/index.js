function calcular(a, b, operacao) {
  console.log("Realizando uma operação");
  const resultado = operacao(a, b);
  return resultado;
}

function somar(a, b) {
  console.log("Realizando uma soma");
  return a + b;
}

// console.log(calcular(3, 5, somar));

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}

const lista = ["Maçã", "Banana", "Laranja", "Limão"];

// lista.forEach(exibirElemento)

// for (let i = 0; i < lista.length; i++) {
//   exibirElemento(lista[i], i, lista);
// }

lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
});
