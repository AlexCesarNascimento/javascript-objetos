function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this,'estoque', {
        // mostra a chave: True  -> Object.keys(p1) [ 'nome', 'preco', 'estoque' ] 
        //                 False -> Object.keys(p1) [ 'nome', 'preco' ]
        enumerable: true,           
        value: estoque,             // valor da chave
        writable: false,            // pode ou não ser alterado
        configurable: true,         // pode ou não ser deletado, ou reconfigurado
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1));

//  enumerable: true  =>   nome preco estoque
//  enumerable: false =>  nome    preco
for(let key in p1) {
    console.log(key);
}