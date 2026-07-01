function calcularDesconto(preco, porcentagemDesconto) {
  let desconto = preco * (porcentagemDesconto / 100);
  return preco - desconto;
}

function calcularPrecoFinal(preco, porcentagemDesconto, callback) {
  let precoFinal = callback(preco, porcentagemDesconto);
  console.log(`O preço final é de R$${precoFinal.toFixed(2)}`);
}

// calcularPrecoFinal(3500,25,calcularDesconto)

// Outro exemplo de Callbac
function DefinirHora(callback) {
  setInterval(() => {
    const agora = new Date();
    const hora = agora.getHours();
    const minuto = agora.getMinutes();
    const segundo = agora.getSeconds();
    const horaAtual = `${hora}:${minuto}:${segundo}`;

    callback(horaAtual);
  }, 1000);
}

function exibirHora(horaAtual) {
  console.log(horaAtual);
}

// DefinirHora(exibirHora)