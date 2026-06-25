let palavra = prompt("Insira aqui a palavra")
let palindromo = ""
let letra = ""

for (let i = palavra.length - 1; i >= 0; i--) {   
    palindromo += palavra[i]
}

if (palindromo == palavra) {
    alert(
        "Palavra escolhida: " + palavra +
        "\nPalavra ao contrário: " + palindromo +
        "\n\né um palindromo!"
    )
} else {
    alert(
        "Palavra escolhida: " + palavra +
        "\nPalavra ao contrário: " + palindromo +
        "\n\nnão é um palindromo!"
    )
}