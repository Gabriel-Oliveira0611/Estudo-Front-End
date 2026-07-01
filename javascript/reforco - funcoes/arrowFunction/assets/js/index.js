let calcularValorHospedagem = (diarias, valorDiaria, taxaLimpeza) => {
  return diarias * valorDiaria + taxaLimpeza;
};

const valorHospedagem = calcularValorHospedagem(9, 500, 300);
console.log(`O valor da reserva é R$ ${valorHospedagem.toFixed(2)}.`);

console.log("-------------------------------------------");

let validarLogin = (usuario, senha) => {
  let usuarioRegistrado = "joao123";
  let senhaRegistrada = "senha123";

  if (usuario === usuarioRegistrado && senha === senhaRegistrada) {
    console.log("Login realizado com sucesso");
    return true;
  } else {
    console.log("Usuário ou senha inválidos. Tente novamente");
    return false;
  }
};

const user1 = validarLogin("joao123", "senha123");
const user2 = validarLogin("maria456", "senha456");

console.log(user1, user2);
