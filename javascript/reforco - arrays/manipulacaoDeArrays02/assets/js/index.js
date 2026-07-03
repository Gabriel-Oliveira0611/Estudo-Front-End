const produtos = ["Notebook", "Smartphone", "Smartwatch", "Playstation 5"];
console.table(produtos);

const produtos2 = ["Iphone 14", "xbox", "atari"];
console.table(produtos2);

// Concat - Junta arrays
const novosProdutos = produtos.concat(produtos2);
console.table(novosProdutos);

// Ordenar produtos em ordem alfabetica usando o método sort()
produtos.sort();
console.table(produtos);

// ordem reversa - reverse()
produtos.reverse();
console.table(produtos);

// Criar uma string com todos os elementos do array separados por vírcula usando o método join()
let produtosString = produtos.join();
console.log(`A string criada é: ${produtosString}`);

// Verificar se o produto "Smartwatch" existe no array usando o método includes()
let existe = produtos.includes("Smartwatch");
console.log(`O produto existe no array? ${existe}`);

// Veriicar se todos os produtos comtém a letra "a" usando o método every()
let todosComLetraA = produtos.every((produto) => {
  return produto.includes(`a`);
});
console.log(`Todos os produtos têm a letra A? ${todosComLetraA}`);

// verificar se pelo menos um elemento tem 10 caracteres com some()
let total = 0;
const tamanhoMaximo10 = produtos.some((produto) => {
  return produto.length <= 10;
});
console.log(tamanhoMaximo10);

// find() - Retrna o primeiro elemento qye tena mais de 6 caracteres
const tamanhoMaior6 = produtos.find((produto) => {
    return produto.length > 6
})
console.log(tamanhoMaior6);
console.log(produtos);

