let produtos = [
  "Notebook",
  "Smartphone",
  "Smartwatch",
  "Tablet",
  "Playstation 5",
];

console.log(produtos);
console.table(produtos);

// Adicionar um item o início do array - unshift()
produtos.unshift("Monitor ultawide");
console.table(produtos);

// Adicionar um item ao final do array - push()
produtos.push("Teclado mecânico razer");
console.table(produtos);

// Remover um item do inicio do array - shift()
let primeiroProduto = produtos.shift();
console.log(`O primeiro produto removido foi ${primeiroProduto}`);
console.log(produtos);

// Remover um item do final do array - pop()
let ultimoProduto = produtos.pop();
console.log(`O último item rmeovido foi ${ultimoProduto}`);
console.log(produtos);

// Adicionar um item em qualquer posição do array - splice()
produtos.splice(2, 0, "tablet apple ipad pro", "iphone 13");
console.log(`O array agora é: ${produtos}`);

// Remover itens do array em quaisquer posições
produtos.splice(1,3)
console.log(`O array agora é: ${produtos}`);

// Criar uma cópia do array usando o método slice()
let copiaProdutos = produtos.slice()
console.log(`A cópia do array é; ${copiaProdutos}`);
console.table(copiaProdutos);

// Encontrar a posição do produto "tablet" no array a partir do início usando indexOf()
let posicao = produtos.indexOf("Tablet")
console.log(`A posição do produto é ${posicao}`);
produtos.push("Tablet")

// Encontrar a posição do item a partir do final do array - lastIndexOf()
posicao = produtos.lastIndexOf("Tablet")
console.log(`A posição do produto é ${posicao}`);

