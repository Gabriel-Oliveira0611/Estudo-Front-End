const form = document.getElementById("orderForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector('input[name = "name"]').value;
  const address = document.querySelector('input[name = "address"]').value;
  const breadType = document.querySelector('select[name = "tipoDePao"]').value;
  const principal = document.querySelector('input[name = "principal"]').value;
  const obs = document.querySelector('textarea[name = "obs"]').value;

  let salada = "";
  document
    .querySelectorAll('input[name = "salada"]:checked')
    .forEach(function (item) {
      salada += `
    - ${item.value}`;
    });

  console.log({ name, address, breadType, principal, obs, salada });

  alert(`
    Pedido realizado!

    -> Nome do cliente: ${name}
    -> Endereço de entrega: ${address}
    -> Tipo de pão: ${breadType}
    -> Recheio: ${principal}
    -> Salada: ${salada}
    -> Observações: ${obs}
    `);
});
