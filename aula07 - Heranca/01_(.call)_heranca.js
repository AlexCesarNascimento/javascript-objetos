// Produto -> aumento, desconto
// Camiseta = Cor
// Caneca = Material

// Constructor functions ----------------------------------------------------------
function Produto(nome, preco)  {
    this.nome = nome;
    this.preco = preco ;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const produto = new Produto('Generico', 50);
const camiseta = new Camiseta( 'Regata', 7.5, 'Preta')
const caneca = new Caneca( 'Canecao', 7.5, 'Porcelana', 10);

console.log(caneca);
console.log(camiseta);
console.log(produto);

