// Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const invertBtn = document.getElementById("invertButton");
const resultTxt = document.getElementById("result");

function inverseString() {
    let str = document.getElementById("inputString").value;
    
    if (str.trim() === "") {  
        resultTxt.innerHTML = "Por favor, insira uma palavra ou frase.";
        return;
    }

    let reversedString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }

    resultTxt.innerHTML = `${reversedString}`;
}

invertBtn.addEventListener("click", inverseString);
