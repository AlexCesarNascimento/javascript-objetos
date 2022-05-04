
// Objeto por construtor
const pessoa1 = new Object();
pessoa1.nome = 'Alex';
pessoa1.sobrenome = 'Cesar';
pessoa1.idade = 27;
pessoa1.falarNome = function() {
    return (`Meu nome é ${this.nome} ${this.sobrenome}`);
}
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

// console.log(pessoa1.falarNome());
// console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}