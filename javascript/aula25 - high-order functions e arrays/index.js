let personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

//  Map - Cria um novo array com base num array existente

let nomes = personagens.map(function (personagem) {
  return personagem.nome;
});

// O que acontece aqui?
// 1 - Criei o array personagens, que é composto por vários objetos
// 2 - Cada objeto tem suas proprieddes, uma delas é o nome.
// 3 - Eu quero criar um array que separe o nome de cada personagem do array principal personagens
// 4 - para isso, crei a variavel nomes e dentro dele, utilizei o MAP para que o map crie o novo array
// 5 - o MAP percorreu cada item do array
// 6 - Cada item do array é um objeto, então criei a variavel PERSONAGEM para conter cada objeto desse array
// 7 - O próximo passo é pegar apenas o NOME dentro desse objeto.
// 8 - Para isso, criei um função que recebe como parâmetro esse objeto que o map pegou
// 9 - A função pega esse objeto e retorna apenas a propriedade NOME desse objeto
// 10 - Ou seja: function (personagem) é igual a personagem.nome
// 11 - o MAP irá pegar esse nome e irá injetar no array NOMES
// console.log(nomes);

// const nomes = []

// for (let i = 0; i < personagens.length; i++) {
//     nomes.push(personagens[i].nome)
// }

// Filter

let orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc";
});

// console.log(orcs);

// Reduce

let nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel;
}, 0);

// console.log(nivelTotal);

let racas = personagens.reduce(function (valorAcumulado, personagem) {
  if (valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push(personagem);
  } else {
    valorAcumulado[personagem.raca] = [personagem];
  }
  return valorAcumulado;
}, {});

// console.log(racas);

// Sort

// ordena o array de forma crescente ou decrescente
// OBS: o sort sozinho irá modificar o array de origem
personagens.sort(function (a, b) {
  return a.nivel - b.nivel;
});

// console.log(personagens);

// O sort com slice sem parâmetro antes irá criar uma cópia do array de origem, sem modifica-lo
let personagensOrdenados = personagens.slice().sort(function (a, b) {
  return a.nivel - b.nivel;
});
