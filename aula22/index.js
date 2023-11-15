// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu ´pssp ter varios else e if na checagem
// Só posso ter um else na checagem

const hora = 59;

if (hora >= 0 && hora < 12){
  console.log('Bom dia');
} else if (hora >= 12 && hora < 18){
  console.log('Boa tarde')
} else if (hora >= 18 && hora < 23){
  console.log('Boa noite')
} else(console.log('Hora nao definida no padrao'))