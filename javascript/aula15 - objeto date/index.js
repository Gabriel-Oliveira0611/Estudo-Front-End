let dataAtual = new Date();
console.log(dataAtual);

// data do mês
let dataMes = dataAtual.getDate();
if (dataMes < 10) {
  dataMes = "0" + dataMes;
}
console.log(dataMes);

// Dia da semana
let dataDia = dataAtual.getDay();
console.log(dataDia);

// colocando o dia da semana por extenso

let diaSemanaExtenso = "";

switch (dataDia) {
  case 0:
    console.log("Hoje é domingo");
    diaSemanaExtenso = "Domingo";
    break;

  case 1:
    console.log("Hoje é segunda-feira");
    diaSemanaExtenso = "Segunda-feira";
    break;

  case 2:
    console.log("Hoje é terça-feira");
    diaSemanaExtenso = "Terça-feira";
    break;

  case 3:
    console.log("Hoje é quarta-feira");
    diaSemanaExtenso = "Quarta-feira";
    break;

  case 4:
    console.log("Hoje é quinta-feira");
    diaSemanaExtenso = "Quinta-feira";
    break;

  case 5:
    console.log("Hoje é sexta-feira");
    diaSemanaExtenso = "Sexta-feira";
    break;

  default:
    console.log("Hoje é sábado");
    diaSemanaExtenso = "Sábado";
    break;
}

// Mês
let mesAtual = dataAtual.getMonth() + 1;
console.log(mesAtual);

let mesAtualZero = mesAtual < 10 ? "0" + mesAtual : mesAtual;
console.log(mesAtualZero);

// Ano
let anoAtual = dataAtual.getFullYear();
console.log(anoAtual);

// Hora
let horaAtual = dataAtual.getHours();
horaAtual = horaAtual < 10 ? "0" + horaAtual : horaAtual;
console.log(horaAtual);

// Minuto
let minutoAtual = dataAtual.getMinutes();
minutoAtual = minutoAtual < 10 ? "0" + minutoAtual : minutoAtual;
console.log(minutoAtual);

// Segundo
let segundoAtual = dataAtual.getSeconds();
segundoAtual = segundoAtual < 10 ? "0" + segundoAtual : segundoAtual;
console.log(segundoAtual);

// Montando a data
console.log(
  `${diaSemanaExtenso}, ${dataMes}/${mesAtualZero}/${anoAtual}, ${horaAtual}:${minutoAtual}:${segundoAtual}`,
);
