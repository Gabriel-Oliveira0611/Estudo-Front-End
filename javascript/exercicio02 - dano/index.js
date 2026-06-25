const nomePrimeiroJogador = prompt("Insira o nome do primeiro jogador");
const ataquePrimeiroJogador = parseFloat(
  prompt("Insira o poder de ataque do rimeiro jogador (0/100)"),
);

const nomeSegundoJogador = prompt("Insira o nome do segundo jogador");
let vidaSegundoJogador = parseFloat(
  prompt("Insira a quantidade de pontos d evida do segundo jogador"),
);
const defesaSegundoJogador = parseFloat(
  prompt("Insir aos pontos de defesa do segundo jogador"),
);
const escudo = prompt("ele possui escudo? (sim/não)");

let danoCausado = 0;
let vidaRestante = 0;

if (ataquePrimeiroJogador > defesaSegundoJogador && escudo == "não") {
  danoCausado = ataquePrimeiroJogador - defesaSegundoJogador;
  vidaRestante = vidaSegundoJogador - danoCausado;
  alert(
    "Segue abaixo os dados:\n" +
      "\n-> Nome do primeiro jogador: " +
      nomePrimeiroJogador +
      "\n-> Poder de ataque: " +
      ataquePrimeiroJogador +
      "\n\n-> Nome do segundo jogador: " +
      nomeSegundoJogador +
      "\n-> Pontos de vida do segundo jogador: " +
      vidaSegundoJogador +
      "\n-> Poder de defesa do segundo jogador: " +
      defesaSegundoJogador +
      "\n-> O segundo jogador possui escudo? " +
      escudo +
      "\n**O poder de ataque foi maior que o poder de defesa e o segundo jogador não tinha escudo, logo:" +
      "\nVida restante para o segundo jogador: " +
      vidaRestante,
  );
} else if (ataquePrimeiroJogador > defesaSegundoJogador && escudo == "sim") {
  danoCausado = 2 / (ataquePrimeiroJogador - defesaSegundoJogador);
  vidaRestante = vidaSegundoJogador - danoCausado;
  alert(
    "Segue abaixo os dados:\n" +
      "\n-> Nome do primeiro jogador: " +
      nomePrimeiroJogador +
      "\n-> Poder de ataque: " +
      ataquePrimeiroJogador +
      "\n\n-> Nome do segundo jogador: " +
      nomeSegundoJogador +
      "\n-> Pontos de vida do segundo jogador: " +
      vidaSegundoJogador +
      "\n-> Poder de defesa do segundo jogador: " +
      defesaSegundoJogador +
      "\n-> O segundo jogador possui escudo? " +
      escudo +
      "\n**O poder de ataque foi maior que o poder de defesa e o segundo jogador tinha escudo, logo:" +
      "\nVida restante para o segundo jogador: " +
      vidaRestante,
  );
} else {
  alert(
    "Segue abaixo os dados:\n" +
      "\n-> Nome do primeiro jogador: " +
      nomePrimeiroJogador +
      "\n-> Poder de ataque: " +
      ataquePrimeiroJogador +
      "\n\n-> Nome do segundo jogador: " +
      nomeSegundoJogador +
      "\n-> Pontos de vida do segundo jogador: " +
      vidaSegundoJogador +
      "\n-> Poder de defesa do segundo jogador: " +
      defesaSegundoJogador +
      "\n-> O segundo jogador possui escudo? " +
      escudo +
      "\n**O poder de ataque foi menor que o poder de defesa, logo:" +
      "\nVida restante para o segundo jogador: " +
      vidaSegundoJogador +
      "\nNenhum dano causado!",
  );
}
