let btnCalcular = document.querySelector("#calcular");
console.log(btnCalcular);

btnCalcular.addEventListener("click", () => {
  // Selecionar os alunos
  let alunos = document.querySelectorAll(".aluno");
  console.log(alunos);

  // Percorrer o array e pegar as informações
  alunos.forEach((aluno) => {
    let nota1 = Number(aluno.querySelector(".nota1").textContent);
    let nota2 = Number(aluno.querySelector(".nota2").textContent);
    let nota3 = Number(aluno.querySelector(".nota3").textContent);

    let media = (nota1 + nota2 + nota3) / 3;

    // Escrevendo na página
    aluno.querySelector(".media").textContent = media.toFixed(1);

    if (media < 6) {
      aluno.classList.add("bg-danger", "text-light");
    }
  });
});
