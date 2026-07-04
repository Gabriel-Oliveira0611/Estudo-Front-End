// Calculadora Geométrica
// Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

// área do triângulo: base * altura / 2
// área do retângulo: base * altura
// área do quadrado: lado²
// área do trapézio: (base maior + base menor) * altura / 2
// área do círculo: pi * raio² (considere pi = 3.14)
// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

let base = 0;
let altura = 0;
let lado = 0;
let baseMaior = 0;
let baseMenor = 0;
let raio = 0;
let resultado = 0;
const pi = 3.14;

function areaTriangulo(base, altura) {
  let resultado = (base * altura) / 2;
  return resultado;
}

function areaRetangulo(base, altura) {
  let resultado = base * altura;
  return resultado;
}

function areaQuadrado(lado) {
  let resultado = lado ** 2;
  return resultado;
}

function areaTrapezio(baseMaior, baseMenor, altura) {
  let resultado = ((baseMaior + baseMenor) * altura) / 2;
  return resultado;
}

function areaCirculo(raio) {
  let resultado = pi * raio ** 2;
  return resultado;
}

let escolha = "";
do {
  escolha = prompt(`
    Seja muito bem-vindo à calculadora geométrica!

    Escolha uma das opções abaixo:
    -> 1: Calcular área de um triângulo
    -> 2: Calcular área de um retângulo
    -> 3: Calcular área de um quadrado
    -> 4: Calcular área de um trapézio
    -> 5: Calcular área de um círculo
    -> 6: Sair
    `);

  switch (escolha) {
    case "1":
      base = Number(prompt("Informe a medida da base"));
      altura = Number(prompt("Informe a medida da altura"));

      resultado = areaTriangulo(base, altura);

      alert(`
        Segue abaixo os dados do cálculo:

        -> Base: ${base}
        -> Altura: ${altura}
        -> Cálculo executado: (${base} x ${altura}) / 2

        -> Resultado: ${resultado}
        `);
      break;

    case "2":
      base = Number(prompt("Informe a medida da base"));
      altura = Number(prompt("Informe a medida da altura"));

      resultado = areaRetangulo(base, altura);

      alert(`
          Segue abaixo os dados do cálculo:

          -> Base: ${base}
          -> Altura: ${altura}
          -> Cálculo executado: ${base} x ${altura}

          -> Resultado: ${resultado}
          `);
      break;

    case "3":
      lado = Number(prompt("Informe a medida do lado"));

      resultado = areaQuadrado(lado);

      alert(`
        Segue abaixo os dados do cálculo:

        -> Lado: ${lado}
        -> Cálculo executado: ${lado}²

        -> Resultado: ${resultado}
        `);
      break;

    case "4":
      baseMaior = Number(prompt("Informe a medida da base maior"));
      baseMenor = Number(prompt("Informe a medida da base menor"));
      altura = Number(prompt("Informe a medida da altura"));

      resultado = areaTrapezio(baseMaior, baseMenor, altura);

      alert(`
          Segue abaixo os dados do cálculo:

          -> Base maior: ${baseMaior}
          -> Base menor: ${baseMenor}
          -> Altura: ${altura}
          -> Cálculo executado: (${baseMaior} + ${baseMenor}) x ${altura} / 2

          -> Resultado: ${resultado}
          `);
      break;

    case "5":
      raio = Number(prompt("Informe a medida do raio"));

      resultado = areaCirculo(raio);

      alert(`
          Segue abaxio os dados do cálculo:

          -> Raio: ${raio}
          -> Cálculo executado: ${pi} * ${raio}²

          -> Resultado: ${resultado}
          `);
      break;

    case "6":
      alert("Encerrando o sistema...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (escolha !== "6");
