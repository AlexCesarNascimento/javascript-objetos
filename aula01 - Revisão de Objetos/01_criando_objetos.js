// Objeto de forma literal
const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Silva',
};

// Notação de ponto
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

// Notação de colchetes
console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);

// A notação de colchetes permite que você crie um atributo dinamicamente
const chave = 'nome';
console.log(pessoa[chave]);