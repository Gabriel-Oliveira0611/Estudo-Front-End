function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
    estoque: 1,
  };

  return {
    produto,
  };
}

const notebook = criarProduto("Notebook dell inspiron 15", 3500);

console.log(notebook);

function areaRetangular(base, altura) {
  return base * altura;
}

// console.log(areaRetangular(3, 5));

function areaQuadrado(lado) {
  return areaRetangular(lado, lado);
}

// console.log(areaQuadrado(9));

function ola() {
  let texto = "olá";
  return texto;
  texto = "Olá. mundo";
  console.log(texto);
}

// console.log(ola());

function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(maioridade(19));
console.log(maioridade(13));

