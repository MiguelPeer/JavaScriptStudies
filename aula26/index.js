// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970
// const data = new Date(2019, 3, 20, 15, 14, 27); // a, m, d, h, M, s, ms
 // A contagem de mes começa do '0'
// const data = new Date(1697807589936)
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth()+ 1); // Mês começa do Zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // 0 = Domingo, 6 = Sabado
// console.log(data.toString());
// console.log(Date.now())
function zeroAEsquerda (num) {
  return num >= 10 ? num: `0${num}`;
}


function formatDate(data) {
  const day = zeroAEsquerda(data.getDate());
  const month = zeroAEsquerda(data.getMonth() + 1);
  const year = zeroAEsquerda(data.getFullYear());
  const hour = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${day}/${month}/${year} ${hour}:${min}:${seg}`;
}
const data = new Date();
const dateBrazil = formatDate(data)
console.log(dateBrazil)