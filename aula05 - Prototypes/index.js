/*
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo:
Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (_proto_)
que vem da propriedade prototype da função construtora que foi usada para criá-lo.
*/
// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => `${this.nome} xablau`;
}

Pessoa.prototype.nomeCompleto= () => this.nome + ' ' + this.sobrenome;

// instancia
const p1 = new Pessoa('João', 'Silva');
const p2 = new Pessoa('Maria', 'Silva');
const data = new Date();


console.dir(p1);
console.dir(data);

// Ordem que o navegar procura os metodos
// instancia -> P1.prototype -> Object.prototype