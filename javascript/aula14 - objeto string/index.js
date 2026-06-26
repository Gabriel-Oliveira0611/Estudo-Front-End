// Criando a string
let frase = `Javascript é uma linguagem de programação maravilhosa`;
console.log(frase);

// Percorrendo a String
console.log(frase.length);
console.log(frase[0]);
console.log(frase[52]);
console.log(frase[53]);

// Letras maiúsculas
console.log(frase.toUpperCase());

// Letras minúsculas
console.log(frase.toLowerCase());

// Percorrendo com método
console.log(frase.charAt(40));

// Buscar algo na String a partir do início
console.log(frase.indexOf(`a`));

// Buscar algo na string a partir do fim
console.log(frase.lastIndexOf(`a`));

// Verificar se existe
console.log(frase.includes("ling"));

// Juntando strings
console.log(frase.concat(" Oi, tudo bem? mais informações").concat("aaaaa"));

// Substituir caracteres
console.log(frase.replace("a", "@"));
console.log(frase.replaceAll("a", "@$"));

// Parte de uma string
console.log(frase.substring(4, 40));
console.log(frase.slice(4, 40));

// Separando a String - Array
console.log(frase.split(" "));

// retirando espaços
console.log(frase);
console.log(frase.trim());

// Verificando se a string começa com uma cadeia de caracteres
console.log(frase.startsWith("Ja"));

// Verificar se a string termina com uma cadeia de caracteres
console.log(frase.endsWith("osa"));

