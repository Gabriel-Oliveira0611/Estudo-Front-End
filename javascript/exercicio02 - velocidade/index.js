const nomePrimeiroVeiculo = prompt("Insira o nome do primeiro veiculo");
const velocidadePrimeiroVeiculo = parseFloat(
  prompt("Insira a velocidade do primeiro veículo"),
);

const nomeSegundoVeiculo = prompt("Insira o nome do segundo veículo");
const velocidadeSegundoVeiculo = parseFloat(
  prompt("Insira a velocidade do segundo veículo"),
);

if (velocidadePrimeiroVeiculo > velocidadeSegundoVeiculo) {
  alert("O primeiro veículo é mais rápido");
} else if (velocidadePrimeiroVeiculo < velocidadeSegundoVeiculo) {
  alert("O segundo veículo é mais rápido");
} else {
  alert("Ambos os veículos estão na mesma velocidade");
}
