const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, c, ...restanteNumeros] = numeros;
console.log(restanteNumeros);

console.log("--------------------------");
let livro = {
  titulo: "O hobbit",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1937,
  editora: "George Allen & Unwin",
  paginas: 310,
};

let { titulo, autor, anoPublicacao, editora, paginas } = livro;
console.log(`Nome do livro: ${titulo}`);
console.log(`Nome do autor: ${autor}`);
console.log(`Ano de publicação: ${anoPublicacao}`);
console.log(`Editora: ${editora}`);
console.log(`Número de páginas: ${paginas}`);




