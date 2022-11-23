const inputs = document.getElementsByTagName('input')
const iterableInputs = [...inputs]

const tipoInvestimento = localStorage.getItem('tipo_investimento')
iterableInputs[0].value = tipoInvestimento


const aporteInicial = Number(localStorage.getItem('aporte_inicial'))
const aporteMensal = Number(localStorage.getItem('aporte_mensal'))
const duracaoInvestimento = Number(localStorage.getItem('duracao_investimento'))
const valorTotalInvestido = aporteInicial + (aporteMensal * duracaoInvestimento)

console.log(aporteInicial, aporteMensal, duracaoInvestimento)
iterableInputs[1].value = valorTotalInvestido

iterableInputs[2].value = duracaoInvestimento

let aliquota = 0
const calcularAliquota = () => {
  switch (true) {
    case (duracaoInvestimento < 6):
      aliquota = 0.225
      break;
    case (duracaoInvestimento >= 6 && duracaoInvestimento < 12):
      aliquota = 0.2
      break;
    case (duracaoInvestimento >= 12 && duracaoInvestimento <= 24):
      aliquota = 0.175
      break;
    case (duracaoInvestimento > 24):
      aliquota = 0.15
      break;
  }
}
calcularAliquota()

const taxa = Math.fround(localStorage.getItem('taxa_de_juros')) / 100
const taxaMensal = taxa / 12

let valorTotal = aporteInicial
let valorTotalSemIR = aporteInicial
for (let i = 1; i <= duracaoInvestimento; i++) {
  valorTotal += aporteMensal
  valorTotalSemIR += aporteMensal
  valorTotal += (valorTotal * taxaMensal) * aliquota
  valorTotalSemIR += valorTotal * taxaMensal
}

iterableInputs[3].value = valorTotal.toFixed(2)
iterableInputs[4].value = valorTotalSemIR.toFixed(2)
const valorTotalSemInvestimento = aporteInicial + (aporteMensal * duracaoInvestimento)
iterableInputs[5].value = (valorTotalSemIR - valorTotalSemInvestimento).toFixed(2)
iterableInputs[6].value = (valorTotalSemIR - valorTotal).toFixed(2)
iterableInputs[7].value = aliquota * 100 + "%"

iterableInputs[1].style.color = '#C4B420'
iterableInputs[2].style.color = '#C4B420'
iterableInputs[3].style.color = '#00982B'
iterableInputs[4].style.color = '#00982B'
iterableInputs[5].style.color = '#00982B'
iterableInputs[6].style.color = '#FF0000'
iterableInputs[7].style.color = '#FF0000'

const labelInvest = document.getElementById('label-line-invest')
const labelPoupanca = document.getElementById('label-line-poupanca')

labelInvest.innerHTML = valorTotal.toFixed(0)
labelPoupanca.innerHTML = (valorTotal * 0.7).toFixed(0)
