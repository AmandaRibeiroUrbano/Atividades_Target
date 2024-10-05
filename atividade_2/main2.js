// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2
//  valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na
//   linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem
//    avisando se o número informado pertence ou não a sequência.


let input = document.getElementById('givenNumber');

const btnSubmit = document.getElementById("submit");
const answer = document.getElementById('answer');

btnSubmit.addEventListener("click", isFibonacci);

input.onkeydown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      btnSubmit.click();
    }
  };

function isFibonacci() {
    let initialValue = 0;
    let secondValue = 1;
    let nextValue = 0;
    let i = 2;
    let inputValue = parseInt(input.value);

  while (nextValue < inputValue) {
    nextValue = initialValue + secondValue;

    if (i % 2 == 0) {
      initialValue = nextValue;
    } else {
      secondValue = nextValue;
    }

    i++;

    if (nextValue == inputValue) {
        answer.innerHTML = 
        `<p> O número ${inputValue} pertence à sequência Fibonacci e está na ${i}º posição. <p>`;
    }
  }

  if (nextValue > inputValue) {
    answer.innerHTML = 
      `<p> O número ${inputValue} não pertence à sequência Fibonacci. <p>`;
  }

  if (inputValue == 0) {
    answer.innerHTML = 
        `<p> O número 0 é o primeiro número da sequência Fibonacci.`;
  }

  input.value = '';
}
