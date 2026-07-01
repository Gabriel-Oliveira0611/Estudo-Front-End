(function () {
  let carrinho = ``;

  function adicionarAoCarrinnho(item) {
    carrinho += item + ` `;
    console.log(item + ` Adicionado ao carrinho!`);
  }

  function obterCarrinho() {
    return carrinho;
  }

  adicionarAoCarrinnho("Livro de HTML");
  adicionarAoCarrinnho("Livro de CSS");
  adicionarAoCarrinnho("Livro de JavaScript");

  console.log(`Itens no carrinho: ` + obterCarrinho());
})();



let calcularPrecoLocacao = (function () {
  let precoBasePorDia = 250;
  let precoPorKm = 2.25;

  function calcularPreco(dias, distancia) {
    return precoBasePorDia * dias + precoPorKm * distancia;
  }

  return calcularPreco;
})();

console.log(`Preço da locação: R$ ${calcularPrecoLocacao(5, 100)}`);
