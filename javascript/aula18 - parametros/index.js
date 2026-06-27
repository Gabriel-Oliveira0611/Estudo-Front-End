function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}

// dobro(5);

function ola(name = "mundo") {
  alert("Olá, " + name);
}

// ola("Gabriel");
// ola();

function soma(a, b) {
  alert(" a soma entre " + a + " + " + b + " é " + (a + b));
}

// soma(2, 5);

function objetoComoParametro(usuario) {
  usuario.nome;
  usuario.email;
}

const usuario = {
  nome: "Gabriel",
  telefone: 11987175329,
  email: "usuario@gmail.com",
  senha: 123,
  endereco: "rua tal",
  aniversario: "06/11/2001",
};

objetoComoParametro(usuario);
