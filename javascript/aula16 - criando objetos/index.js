let produto1 = {
  id: 123,
  tipo: "Celular",
  fabricante: "Xiaomi",
  preco: 1800.0,
};

let produto2 = {
  id: 456,
  tipo: "Notebook",
  fabricante: "Dell",
  preco: 3999.99,
};

console.log(produto1);
console.log(produto2);

console.log(produto1.tipo);
console.log(produto2.preco);

function User(id, user, password, email) {
  this.id = id;
  this.user = user;
  this.password = password;
  this.email = email;
}

let user1 = new User(123, "eu mesmo", "abc", "eumesmo@hotmail.com");
let user2 = new User(456, "você mesmo", "def", "vocemesmo@gmail.com");
let user3 = new User(789, "Ele mesmo", "ghi", "elemesmo@gmail.com");

console.log(user1);
console.log(user2);
console.log(user3);

console.log(user1.id);
console.log(user2.email);

// Factory function
function criarHeroi(nome, velocidade, agilidade, forca) {
  return {
    nome,
    velocidade,
    agilidade,
    forca,
  };
}

let heroi1 = criarHeroi("eu", 88, 87, 91);
let heroi2 = criarHeroi("tu", 86, 82, 92);
let heroi3 = criarHeroi("Ele", 92, 98, 94);

console.log(heroi1);
console.log(heroi2.nome);
console.log(heroi3.velocidade);

function Pessoa(nome, idade, altura, cidade, ocupacao) {
  return {
    nome,
    idade,
    altura,
    cidade,
    ocupacao,
    exibirPessoa: function () {
      console.log(`Nome: ${nome}`);
      console.log(`Idade: ${idade}`);
      console.log(`Altura: ${altura}`);
      console.log(`Cidade: ${cidade}`);
      console.log(`Ocupação: ${ocupacao}`);
    },
  };
}

let pessoa1 = new Pessoa("Gabriel", 24, 1.7, "Diadema", "Projetista");
pessoa1.exibirPessoa();

let pessoa2 = new Pessoa("Emily", 22, 1.62, "Diadema", "Desenvolvedora");
pessoa2.exibirPessoa();

// Adicionando uma propriedade a um objeto existente
console.log("Adicionando a propriedade projeto atual");
pessoa1.projetoAtual = "Projeto Aeris Mars";
// pessoa1.exibirPessoa()
console.log(pessoa1);

// Removendo uma propriedade de um objeto existente
console.log("Removendo a altura da pessoa 2");
delete pessoa2.altura;
console.log(pessoa2);
