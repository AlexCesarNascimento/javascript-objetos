function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,           
            value: nome,                // valor da chave
            writable: false,            // pode ou não ser alterado
            configurable: true,         // pode ou não ser deletado, ou reconfigurado
        },
        preco: {
            enumerable: true,           
            value: preco,               // valor da chave
            writable: false,            // pode ou não ser alterado
            configurable: true,         // pode ou não ser deletado, ou reconfigurado
        },
        estoque: {
            enumerable: true,           
            value: estoque,             // valor da chave
            writable: false,            // pode ou não ser alterado
            configurable: true,         // pode ou não ser deletado, ou reconfigurado
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);