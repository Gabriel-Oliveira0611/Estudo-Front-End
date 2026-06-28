function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function calcularAreaRetangulo(base, altura) {
  return base * altura;
}

function calcularAreaQuadrado(lado) {
  return lado ** 2;
}

function calcularAreaTrapezio(baseMaior, baseMenor, altura) {
  return ((baseMaior + baseMenor) * altura) / 2;
}

const pi = 3.14;

function calcularAreaCirculo(raio) {
  return pi * raio ** 2;
}

let escolha = "";

do {
  escolha = prompt(`
        Seja muito bem-vindo à Calculadora Geométrica!
        Escolha uma das opções abaixo:

        -> 1: Calcular área de um triângulo
        -> 2: Calcular área de um retângulo
        -> 3: Calcular área de um quadrado
        -> 4: Calcular área de um trapézio
        -> 5: Calcular área de um círculo
        -> 6: Sair
        `);

  switch (escolha) {
    case "1": {
      let base = Number(prompt("Qual é a medida da base do triângulo?"));
      let altura = Number(prompt("Qual é a medida da altura do triângulo?"));

      let resultado = calcularAreaTriangulo(base, altura);

      alert(`
        Segue abaixo os dados da área do triângulo:

        -> Base: ${base}
        -> Altura: ${altura}
        -> Cálculo executado: ${base} x ${altura} / 2

        -> Resultado: ${resultado}
        `);
      break;
    }

    case "2": {
      let base = Number(prompt("Qual é a medida da base do retângulo?"));
      let altura = Number(prompt("Qual é a medida da altura do retângulo?"));

      let resultado = calcularAreaRetangulo(base, altura);

      alert(`
        Segue abaixo os dados da área do retângulo:

        -> Base: ${base}
        -> Altura: ${altura}
        -> Cálculo executado: ${base} x ${altura}

        -> Resultado: ${resultado}
        `);
      break;
    }

    case "3": {
      let lado = Number(prompt("Qual é a medida do lado do quadrado?"));

      let resultado = calcularAreaQuadrado(lado);

      alert(`
            Segue abaixo os dados da área do quadrado:

            -> Lado: ${lado}
            -> Cálculo executado: ${lado}²

            -> Resultado: ${resultado}
            `);
      break;
    }

    case "4": {
      let baseMaior = Number(
        prompt("Qual é a medida da base maior do trapézio?"),
      );
      let baseMenor = Number(
        prompt("Qual é a medida da base menor do trapézio?"),
      );
      let altura = Number(prompt("Qual é a medida da altura do trapézio?"));

      let resultado = calcularAreaTrapezio(baseMaior, baseMenor, altura);

      alert(`
        Segue abaixo os dados da área do trapézio:

        -> Base maior: ${baseMaior}
        -> Base menor: ${baseMenor}
        -> Altura: ${altura}
        -> Cálculo executado: (${baseMaior} + ${baseMenor}) x ${altura} / 2

        -> Resultado: ${resultado}
        `);
      break;
    }

    case "5": {
      let raio = Number(prompt("Qual é a medida do raio do círculo?"));

      let resultado = calcularAreaCirculo(raio);

      alert(`
            Segue abaixo os dados da área do círculo:

            -> Raio: ${raio}
            -> Pi: ${pi}
            -> Cálculo executado: ${pi} * ${raio}²

            -> Resultado: ${resultado}
            `);
      break;
    }

    case "6":
      alert("Encerrando o sistema...");
      break;

    default:
      alert("Opção inválida.");
      break;
  }
} while (escolha !== "6");
