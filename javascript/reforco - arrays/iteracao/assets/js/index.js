let produtos = [
  "Smartphone",
  "Notebook",
  "Smartwatch",
  "Tablet",
  "Teclado",
  "Mouse",
  "Caixa de som",
  "Fone de ouvido",
  "Webcam",
  "Roteador",
];

// Utilizando o for comum
console.table(produtos);
for (let i = 0; i < produtos.length; i++) {
  console.log(`Índice ${i} do array = ${produtos[i]}`);
}

// for in
console.log(`------------------ for in --------------------`);
for (let index in produtos) {
  console.log(`Índice: ${index} - Produto: ${produtos[index]}`);
}

// for of
console.log(`------------------ for of --------------------`);
for (let produto of produtos) {
  console.log(`Nome do produto: ${produto.toUpperCase()}`);
}

// for each
console.log(`------------------ for each --------------------`);
let produtoMaiorQuantidade = ``;
let maiorQuantidade = 0;
produtos.forEach((produto) => {
  console.log(`${produto} - ${produto.length}`);
  if (produto.length > maiorQuantidade) {
    maiorQuantidade = produto.length;
    produtoMaiorQuantidade = produto;
  }
});

console.log(
  `Maior quantidade de caracteres: ${produtoMaiorQuantidade} - Total: ${maiorQuantidade} caracteres`,
);
