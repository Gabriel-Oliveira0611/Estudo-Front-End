// Selecionando pelo ID

let getId1 = document.getElementById("aluno-um");
console.log(getId1);

let getId2 = document.querySelector("#aluno-dois")
console.log(getId2);

// Selecionando pela class
let getClass1 = document.getElementsByClassName("nome")
console.log(getClass1);
console.log(getClass1[2].textContent);
getClass1[2].textContent = "Eu mesmo"

let getClass2 = document.querySelectorAll(".nome")
console.log(getClass2);

let getTag1 = document.getElementsByTagName("td")
console.log(getTag1);

let getTag2 = document.querySelectorAll("tr")
console.log(getTag2);
