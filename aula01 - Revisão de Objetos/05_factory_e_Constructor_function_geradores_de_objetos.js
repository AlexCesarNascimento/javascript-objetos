// Factory functions / Constructor / Classes

// Factory functions ---------------------------------------------------------
function criaPessoa(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }, 
    }
}

const p1 = criaPessoa('Alex', 'Cesar');
console.log(p1.nomeCompleto);

// Constructor functions ----------------------------------------------------------
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    // assim posso travar o objeto direto no construtor
    Object.freeze(this);
}

// a palavra NEW vai criar um obj vazio, ela vai pegar a palavra this e atrela ao objeto criado
const p2 = new Pessoa('Alex', 'Cesar');
// Podemos travar um objeto para que ele não seja alterado
Object.freeze(p2);
p2.nome = 'Pedro';
console.log(p2);