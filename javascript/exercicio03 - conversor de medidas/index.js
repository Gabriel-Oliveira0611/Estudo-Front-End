let medidaInicial = parseInt(prompt("Insira a medida em metros:"));

let mm = medidaInicial * 1000;
let cm = medidaInicial * 100;
let dm = medidaInicial * 10;
let dam = medidaInicial / 10;
let hm = medidaInicial / 100;
let km = medidaInicial / 1000;

let escolha = prompt(
  "Escolha uma da sopões abaixo para conversão da medida de " +
    medidaInicial +
    "m:\n" +
    "\n-> Milímetros (mm)" +
    "\n-> Centímetros (cm)" +
    "\n-> Decímetros (dm)" +
    "\n-> Decâmetros (dam)" +
    "\n-> Hectômetro (hm)" +
    "\n-> Quilômetro (km)",
);

switch (escolha) {
  case "mm":
    alert(
      "A medida de " +
        medidaInicial +
        "m convertida em milímetros resulta em " +
        mm +
        "mm",
    );
    break;

  case "cm":
    alert(
      "A medida de " +
        medidaInicial +
        "m convertida em centímetros resulta em " +
        cm +
        "cm",
    );
    break;

  case "dm":
    alert(
      "A medida de " +
        medidaInicial +
        "m convertida em decímetros resulta em " +
        dm +
        "dm",
    );
    break;

  case "dam":
    alert(
      "A medida de " +
        medidaInicial +
        "m convertida em decâmetros resulta em " +
        dam +
        "dam",
    );
    break;

  case "hm":
    alert(
      "A medida de " +
        medidaInicial +
        "m convertida em hectômetros resulta em " +
        hm +
        "hm",
    );
    break;

  case "km":
    alert(
      "A medida de " +
        medidaInicial +
        "m convertida em quilômetros resulta em " +
        km +
        "km",
    );
    break;

  default:
    alert("unidade de medida inválida");
    break;
}
