const produtos = [
  "Notebook",
  "Smartphone",
  "Smartwatch",
  "Tablet",
  "Playstation 5",
];
const precos = [6800, 6700, 3500, 6300, 5400];

console.log(produtos);
console.log(precos);

// filter
let produtosComSmart = produtos.filter((produto) => {
  return produto.includes("Smart");
});

console.log(produtosComSmart);

// filter() - Buscando preço maiores que 5500
let precosMaiores = precos.filter((preco) => {
  return preco < 5500;
});

console.log(precosMaiores);

// map() - Aplica uma função a cada elemento de um array, e retorna um novo array
let produtosEmMaiuscula = produtos.map((produto) => {
  return produto.toUpperCase();
});
console.log(produtosEmMaiuscula);

// map() - dar desconto de 10%
let precosDesconto = precos.map((preco) => {
  return preco - preco * 0.1;
});
console.log(precosDesconto);

// reduce() - Retorna um unico valor
let totalLetraProdutos = produtos.reduce((acumulador, produto) => {
  return acumulador + produto.length;
}, 0);

console.log(totalLetraProdutos);

let totalValores = precos.reduce((acumulador, preco) => {
  return acumulador + preco;
}, 0);
console.log(totalValores);
