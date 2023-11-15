function criaPessoa (nome, sobrenome, idade) {
  return {nome,sobrenome,idade,};
}

const pessoa1 = criaPessoa('Miguel', 'Pereira', 20)
console.log(pessoa1.nome)

const pessoa2 = {
  nome: 'Leandro',
  sobrenome: 'Miranda',
  idade: 20,

  fala() {
    console.log(`A minha idade atual é ${this.idade}`);
  },

  incrementaIdade() {
    this.idade++;
  }
};

pessoa2.fala();