let nome = prompt("Qual é o seu nome?");

let resposta = prompt("Você já visitou alguma cidade?");
let cidade = "";
let cidadesVisitadas = "";
let contagem = 0;

while (resposta == "sim") {
  contagem++;
  cidade = prompt("Qual é o nome da cidade?");
  cidadesVisitadas += cidade + "\n";
  resposta = prompt("Já visitou mais alguma cidade?");
}

alert(
  nome +
    ", segue abaixo os dados:\n" +
    "Quantidade de cidades visitadas:" +
    contagem +
    "\nCidades visitadas: " +
    cidadesVisitadas,
);
