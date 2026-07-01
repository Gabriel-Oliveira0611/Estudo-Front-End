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
let existe = produtos.includes("Smartwatch")
console.log(`O produto existe no array? ${existe}`);
