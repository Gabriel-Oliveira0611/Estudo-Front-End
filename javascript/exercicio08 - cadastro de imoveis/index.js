function cadastrarImovel(
  nomeProprietario,
  quantidadeQuartos,
  quantidadeBanheiros,
  possuiGaragem,
) {
  return {
    nomeProprietario,
    quantidadeQuartos,
    quantidadeBanheiros,
    possuiGaragem,

    exibirDados: function () {
      console.log(`-> Nome do proprietário: ${this.nomeProprietario}`);
      console.log(`-> Quanidade de quartos: ${this.quantidadeQuartos}`);
      console.log(`-> Quantidade de banheiros: ${this.quantidadeBanheiros}`);
      console.log(`-> Possui garagem? ${this.possuiGaragem}`);
    },
  };
}

// Criação de imóveis de exemplo
const imovel1 = cadastrarImovel("Gabriel", 2, 2, "Sim");
const imovel2 = cadastrarImovel("Paulo", 2, 1, "Sim");
const imovel3 = cadastrarImovel("Rogério", 1, 1, "Não");

// Criação do array com todos os imóveis
let imoveis = [imovel1, imovel2, imovel3];

// Menu interativo
let escolha = "";

do {
  for (let i = 0; i < imoveis.length; i++) {
    quantidadeImoveis = i + 1;
  }

  if (quantidadeImoveis >= 2) {
    escolha = prompt(
      `Seja muito bem-vindo ao cadstro de imóveis!
        Total de imóveis cadastrados: ${quantidadeImoveis} imóveis.
        
        Escolha uma das opções abaixo:
        -> 1: Salvar um imóvel
        -> 2: Mostar imóveis salvos.
        -> 3: Sair`,
    );
  } else {
    escolha = prompt(
      `Seja muito bem-vindo ao cadstro de imóveis!
        Total de imóveis cadastrados: ${quantidadeImoveis} imóvel
        
        Escolha uma das opções abaixo:
        -> 1: Salvar um imóvel
        -> 2: Mostar imóveis salvos.
        -> 3: Sair`,
    );
  }

  switch (escolha) {
    case "1":
      let nomeImovel = prompt("Qual é o nome do imóvel?");
      let nomeProprietario = prompt("Qual é o nome do proprietário do imóvel?");
      let quantidadeQuartos = parseInt(
        prompt("Qual é a quantidade de quartos do imóvel?"),
      );
      let quantidadeBanheiros = parseInt(
        prompt("Qual é a quantidade de banheiros do imóvel?"),
      );
      let possuiGaragem = prompt("O imóvel possui garagem? (Sim/Não)");

      nomeImovel = cadastrarImovel();
      imoveis.push(nomeImovel);
      break;

    case "2":
      let exibicao = "";

      function mostrarImoveis() {
        for (let contador = 0; contador < imoveis.length; contador++) {
          exibicao += alert(
            `Segue abaixo os dados dos imóveis cadastrados:
      Total de imóveis: ${quantidadeImoveis}
      
      -> Nome do imóvel: ${imoveis[contador]}
      --> Nome do proprietário: ${imoveis[contador].nomeProprietario}
      --> Quantidade de quartos: ${imoveis[contador].quantidadeQuartos}
      --> Quantidade de banheiros: ${imoveis[contador].quantidadeBanheiros}
      --> Possui garagem? ${imoveis[contador].possuiGaragem}`,
          );
        }
      }

      alert(mostrarImoveis())
      break;

    default:
      break;
  }
} while (escolha !== "3");
