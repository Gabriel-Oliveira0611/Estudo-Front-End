// Cadastro de Imóveis
// Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

// Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// O menu deve ter a opção de salvar um imóvel.
// Para salvar um novo imóvel o programa deve pedir as seguintes informações
// Nome do proprietário.
// Quantidade de quartos.
// Quantidade de banheiros.
// Se possui garagem.
// O menu também deve ter a opção de mostrar todos os imóveis salvos.

let imoveis = [];

function cadastrarImovel(
  nomeImovel,
  nomeProprietario,
  quantidadeQuartos,
  quantidadeBanheiros,
  possuiGaragem,
) {
  return {
    nomeImovel,
    nomeProprietario,
    quantidadeQuartos,
    quantidadeBanheiros,
    possuiGaragem,

    exibirDados() {
      alert(`
        Segue abaixo os dados do imóvel:

        -> Nome do imóvel: ${this.nomeImovel}
        -> Nome do proprietário: ${this.nomeProprietario}
        -> Quantidade de quartos: ${this.quantidadeQuartos}
        -> Quantidade de banheiros: ${this.quantidadeBanheiros}
        -> Possui garagem? ${this.possuiGaragem}
        `);
    },

    salvarImovel() {
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
    -> 2: Exibir imóveis
    -> 3: Sair
    `);

  switch (escolha) {
    case "1":
      let imovelCadastrado = cadastrarImovel(
        prompt(`Qual é o nome do imóvel?`),
        prompt(`Qual é o nome do proprietário?`),
        Number(prompt(`Qual é a quantidade de quartos do imóvel?`)),
        Number(prompt(`Qual é a quantidade de banheiros do imóvel?`)),
        prompt(`O imóvel possui garagem? (Sim/Não)`),
      );

      imovelCadastrado.salvarImovel();
      break;

    case "2":
      let exibicao = "";
      for (let i = 0; i < imoveis.length; i++) {
        exibicao += `
          -> Nome do imóvel: ${imoveis[i].nomeImovel}
          -> Nome do proprietário: ${imoveis[i].nomeProprietario} 
          -> Quantidade de quartos: ${imoveis[i].quantidadeQuartos}
          -> Quantidade de banheiros: ${imoveis[i].quantidadeBanheiros}
          -> Possui garagem? ${imoveis[i].possuiGaragem}

          `;
      }

      alert(`
        Segue abaixo os ados dos imóveis cadastrados:
        ${exibicao}
        `);
      break;

    case "3":
      alert(`Encerrando o sistema...`);
      break;

    default:
      alert(`Opção inválida!`);
      break;
  }
} while (escolha !== "3");
