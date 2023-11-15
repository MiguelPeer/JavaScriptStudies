const h1 = document.querySelector('.container h1');

function getDaySeman(diaSemana) {

  let diaSemanaTexto;

  switch(diaSemana) {
    case 0:
      diaSemanaTexto = 'domingo';
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = 'segunda-feira';
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = 'terça-feira';
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = 'quarta-feira';
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = 'quinta-feira';
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = 'sexta-feira';
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = 'sabado';
      return diaSemanaTexto;
    default:
      diaSemanaTexto = '';
  }
}

function getNameMonth(numberMonth) {

  let nameMonth;

  switch (numberMonth) {
    case 0:
      nameMonth = 'janeiro';
      break
    case 1:
      nameMonth = 'feveiro';
      break
    case 2:
      nameMonth = 'março';
      break
    case 3:
      nameMonth = 'abril';
      break
    case 4:
      nameMonth = 'maio';
      break
    case 5:
      nameMonth = 'junho';
      break
    case 6:
      nameMonth = 'julho';
      break
    case 7:
      nameMonth = 'agosto';
      break
    case 8:
      nameMonth = 'setembro';
      break
    case 9:
      nameMonth = 'outubro';
      break
    case 10:
      nameMonth = 'novembro';
      break
    case 11:
      nameMonth = 'dezembro';
      break
    default:
      nameMonth = '';
      break
  }

  return nameMonth;
}

function createDate() {
  const data = new Date();
  const seconds = data.getSeconds();
  const formatSeconds = String(seconds).padStart(2, '0')
  const minutes = data.getMinutes();
  const formatMinuts = String(minutes).padStart(2, '0')
  const diaSeman = data.getDay();
  const numeroMes= data.getMonth();
  const nameday = getDaySeman(diaSeman);
  const nomeMonth = getNameMonth(numeroMes);

  return (
    ` Data: ${nameday}, ${data.getDate()} de ${nomeMonth} de ${data.getFullYear()} <br/> ` +
    ` Horário:${data.getHours()}:${formatMinuts}:${formatSeconds}`
    )
}

function updateDom() {
  const date = createDate();
  h1.innerHTML = date;
}

setInterval(updateDom, 1000)