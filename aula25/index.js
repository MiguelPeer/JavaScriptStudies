// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontucaoUsuario = 1000;
const nivelUsuario = pontucaoUsuario >= 1000 ? 'Usuario VIP' :
 'Usuario Normal';

 const corUsuario = null;
 const corPadrao = corUsuario || 'Preta';
console.log(nivelUsuario, corPadrao)


