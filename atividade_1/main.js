const answer = document.getElementById('answerQuestion');

function question_1() {
  const indice = 13;
  let soma = 0;
  let k = 0;

  while (k < indice) {
    k = k + 1;
    soma = soma + k;
  }

  answer.innerHTML = `O valor da váriavel soma é ${soma}`
}

question_1()
