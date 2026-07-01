let simularValorPassagem = function (qtdAdultos, qtdCriancas, idaVolta) {
  const PRECO_PASSAGEM = 1000;

  // Cálculo para adulto
  let valorAdulto = PRECO_PASSAGEM * qtdAdultos;

  // Cálculo para criança
  let valorCrianca = PRECO_PASSAGEM * qtdCriancas * 0.5;

  if (idaVolta) {
    return (valorAdulto + valorCrianca) * 2;
  } else {
    return valorAdulto + valorCrianca;
  }
};

let valorPassagem = simularValorPassagem(2, 3, false);
console.log(
  `O valor total das passagens será de R$ ${valorPassagem.toFixed(2)}`,
);

valorPassagem = simularValorPassagem(3, 0, true);
console.log(
  `O valor total das passagens será de R$ ${valorPassagem.toFixed(2)}`,
);
