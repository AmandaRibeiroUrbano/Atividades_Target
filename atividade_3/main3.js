import dados from "./dados.json" assert { type: "json" };

const calculateRevenue = (dados) => {
  const values = dados.map((day) => day.valor).filter((value) => value > 0);
  const lowestValue = Math.min(...values);
  const highestValue = Math.max(...values);
  const total = values.reduce((acc, value) => acc + value, 0);
  const monthlyAverage = total / values.length;
  const daysAboveAverage = values.filter(
    (value) => value > monthlyAverage
  ).length;

  return {
    lowestValue,
    highestValue,
    daysAboveAverage,
    monthlyAverage,
  };
};

const resultado = calculateRevenue(dados);

console.log(`Menor valor de faturamento: ${resultado.lowestValue}`);
console.log(`Maior valor de faturamento: ${resultado.highestValue}`);
console.log(
  `Número de dias com faturamento acima da média mensal: ${resultado.daysAboveAverage}`
);
console.log(`Média mensal: ${resultado.monthlyAverage}`);
