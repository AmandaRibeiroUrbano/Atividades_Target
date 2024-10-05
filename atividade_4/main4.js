const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};
const resultado = document.getElementById("resultado");

function valorTotalFaturamento() {
  let arrFaturamento = Object.values(faturamento);
  let soma = 0;
  for (let i = 0; i < arrFaturamento.length; i++) {
    soma += arrFaturamento[i];
  }
  return soma;
}

const valorTotal = valorTotalFaturamento();
for (const key in faturamento) {
  if (Object.prototype.hasOwnProperty.call(faturamento, key)) {
    const valor = faturamento[key];
    const porcentagem = (valor * 100) / valorTotal;
    resultado.innerHTML += `<li> ${key} - ${porcentagem.toFixed(2)}% </li>`;
  }
}
