let numero = parseFloat(prompt("Digite abaixo o número"));
let tabuada = "";

for (let i = 0; i <= 20; i++) {
  tabuada += "-> " + numero + " x " + i + " = " + i * numero + "\n";
}

alert(tabuada);
