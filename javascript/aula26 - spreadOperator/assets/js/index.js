let numeros1 = [1, 2, 3];
console.log(`Array numeros1: ${numeros1}`);

let numeros2 = [4, 5, 6];
console.log(`Array numeros2: ${numeros2}`);

let todosNumeros = [...numeros1, ...numeros2];
console.log(todosNumeros);

let novoArray = [12, 14, 16, 18, ...todosNumeros, 20, 22, 24];
console.log(novoArray);

// Com objetos
console.log("-----------------------------------------");
let carrinho = {
  Camiseta: 99.99,
  Calça: 159.99,
  Tênis: 289.98,
};

// copia os itens do carrinho1 para um novo carrinho
let carrinhoCopiado = { ...carrinho };
console.log(carrinho);
console.log(carrinhoCopiado);
