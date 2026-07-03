// objetos literais
let produto1 = {
  id: 123,
  tipo: "Celular",
  fabricante: "Apple",
  preco: 4899.0,
};

let produto2 = {
  id: 456,
  tipo: "Notebook",
  fabricante: "Asus",
  preco: 6899.0,
};

console.log(produto1);
console.log(produto2);
console.log(produto1.tipo);
console.log(produto2.preco);
console.log(`-----------------------------------`);

// Criando objetos com construtor
function User(id, user, password, email) {
  ((this.id = id),
    (this.user = user),
    (this.password = password),
    (this.email = email));
}

let user1 = new User(123, "Eu mesmo", "abc", "eumesmo@eu.com");
let user2 = new User(456, "Você mesmo", "def", "vocemesmo@voce.com");
let user3 = new User(789, "Ele mesmo", "ghi", "elemesmo@ele.com");

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user3.id);
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

let heroi1 = criarHeroi("Eu", 88, 87, 91);
let heroi2 = criarHeroi("Tu", 86, 82, 92);
let heroi3 = criarHeroi("Ele", 92, 98, 94);

console.log(heroi1);
console.log(heroi3.forca);

// Criação por método
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

let pessoa1 = new Pessoa("Paulo", 50, 1.93, "São Paulo", "Desenvolvedor");
pessoa1.exibirPessoa();
let pessoa2 = new Pessoa("Sandra", 30, 1.7, "Rio de Janeiro", "Desenvolvedora");

// Adicionando uma propriedade a um objeto
pessoa1.projetoAtual = `Projeto front-end Tesla`;
console.log(pessoa1);

// Removendo uma propriedade de um objeto
delete pessoa2.altura;
console.log(pessoa2);
