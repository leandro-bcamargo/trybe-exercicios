// dataInicial, qtdeBoletos
// 14.02.1989

// 1 - separar dia/mês/ano
// 2 - array de meses com 31 dias.
// 3 - se dia === 29 && mês === 02 return 01/03/ano;
// 4 - se mês < 12
//    5 - se dia === 31 && array31dias includes mês => return 31/mês + 1/ ano
//    6 - return dia/mês + 1/ ano
// 7 - return dia/01/ano + 1;

const gerarDataBoletos = (dataInicial, qtdeBoletos) => {
  // Guardando o dia da data original
  const [diaOriginal] = dataInicial.split('/').map(item => Number(item));
  // Declara a data atual
  let dataAtual = dataInicial;
  const arr31Dias = [01, 03, 05, 07, 08, 10, 12];
  const result = []
  for (let i = 0; i < qtdeBoletos; i++) {
    dataAtual = dataAtual.split('/').map(item => Number(item));
    let [dia, mes, ano] = dataAtual;
    if (dia > 28 && mes === 01) {
      if (dia === 29 && ano % 4 === 0) result.push(`29/02/${ano}`);
      else result.push(`28/02/${ano}`);
    }
    else if (mes === 2) result.push(`${diaOriginal}/03/${ano}`)
    else if (mes < 12) {
      if (dia === 31 && arr31Dias.includes(mes + 1)) result.push(`31/${mes + 1}/${ano}`);
      else if (dia === 31) result.push(`30/${mes + 1}/${ano}`);
      else if (dia === 30 && arr31Dias.includes(mes + 1) && diaOriginal === 31) result.push(`31/${mes + 1}/${ano}`)
      else result.push(`${dia}/${mes + 1}/${ano}`);
    }
    else result.push(`${dia}/01/${ano + 1}`); 
    dataAtual = result[result.length - 1];
  }
  return result;
}

console.log(gerarDataBoletos('28/02/2022', 13));