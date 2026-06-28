function dividir(num) {
  console.log(num);
  if (num % 2 === 0) {
    dividir(num / 2);
  } else {
    return num;
  }
}

// dividir(1024)

// Fatorial de 5: !5 === 5 * 4 * 3 * 2 * 1 === 5 * !4

function fatorial(num) {
    console.log("Número: " + num);
    if (num === 0) {
        return 1
    } else if (num === 1) {
        return 1
    } else {
        console.log(num + " * !" + (num - 1));
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(5));
