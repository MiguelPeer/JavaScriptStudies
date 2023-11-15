let varA = 'A'; //B  //A
let varB = 'B'; //C  //B
let varC = 'C'; //A // C
let varR = '';

varR = varA
varA = varB
varB = varC
varC = varR

console.log(varA, varB, varC)