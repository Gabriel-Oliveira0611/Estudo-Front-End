let imoveis = [];

function cadastrarImovel(
  nomeImovel,
  nomeProprietario,
  quantidadeQuartos,
  quantidadeBanheiros,
  possuiGaragem,
) {
  return {
    nomeImovel: nomeImovel,
    nomeProprietario: nomeProprietario,
    quantidadeQuartos: quantidadeQuartos,
    quantidadeBanheiros: quantidadeBanheiros,
    possuiGaragem: possuiGaragem,

    esibirDados: function () {
      alert(`
        -> Nome do imóvel: ${this.nomeImovel}
        --> Nome do proprietário: ${this.nomeProprietario}
        --> Quantidade de quartos: ${this.quantidadeQuartos}
        --> Quantidade de banheiros: ${this.quantidadeBanheiros}
        --> Possui garagem? ${this.possuiGaragem}
        `);
    },

    salvarImovel: function () {
      imoveis.push(this);
    },
  };
}

let escolha = "";

do {
  escolha = prompt(`
    Seja muito bem-vindo ao cadastro de imóveis!
    Total de imóveis cadastrados: ${imoveis.length}

    Escolha uma das opções abaixo:
    -> 1: Cadastrar imóvel
    -> 2: Imóveis cadastrados
    -> 3: Sair
    `);

  switch (escolha) {
    case "1":
      let imovelCadastrado = cadastrarImovel(
        prompt("Qual é o nome do imóvel?"),
        prompt("Qual é o nome do proprietário?"),
        Number(prompt("Qual é a quantidade de quartos do imóvel?")),
        Number(prompt("Qual é a quantidade de banheiros do imóvel?")),
        prompt("O imóvel possui garagem? (Sim/Não)"),
      );

      imovelCadastrado.salvarImovel();
      break;

    case "2":
      let exibicao = "";
      for (let i = 0; i < imoveis.length; i++) {
        exibicao += `
        -> Nome do imóvel: ${imoveis[i].nomeImovel}
        --> Nome do proprietário: ${imoveis[i].nomeProprietario}
        --> Quantidade de quartos: ${imoveis[i].quantidadeQuartos}
        --> Quantidade de banheiros: ${imoveis[i].quantidadeBanheiros}
        --> Possui garagem? ${imoveis[i].possuiGaragem}
        `;
      }

      alert(
        `
        Segue abaixo os dados dos imóveis cadastrados:

        ${exibicao}
        `,
      );
      break;

    case "3":
      alert("Encerrando o sistema...");
      break;

    default:
      break;
  }
} while (escolha !== "3");
