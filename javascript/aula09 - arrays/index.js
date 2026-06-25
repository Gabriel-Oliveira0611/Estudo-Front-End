const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

// Adicionar elementos
// Push - Adiciona um elemento ao final do array, podedo também retornat o novo comptimento (length) do array
// arr.push("Boromir");
// console.log(arr);

//  Unshift - Adiciona um elemento no início do array, podendo também retornar o novo comprimento do array

arr.unshift("Boromir");
console.log(arr);

// Remover elementos
// pop - Remove um elemento no final do array, podendo também retornar o elemento removido
const elementoRemovido = arr.pop();
console.log(arr);
console.log(elementoRemovido);

// Shift - Remove um elemento no início do arrya, podendo também retornar o elemento removido
const prmeiroElemento = arr.shift();
console.log(prmeiroElemento);
console.log(arr);

// Pesquisar por um elemento
// Includes
const inclui = arr.includes("Gandalf");
console.log(inclui);

// IndexOf
const indice = arr.indexOf("Gandalf");
console.log(indice);

// Cortar e concatenar
// Slice - Cria um novo array com elementos de um outro array
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

// Concat - Cria um novo array juntando elementos e arrays anteriores
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// Substituição dos elemntos
// Splice - Remove um grupoo de elementos e os substitui por outros elementos
const a = sociedade.splice(indice, 1, "Gandalf, o cinzento");
console.log(sociedade);
console.log(a);

// Iterar
for (let i = 0; i < sociedade.length; i++) {
  const elemento = sociedade[i];
  console.log(elemento + " Se encontra na posição " + i);
}
