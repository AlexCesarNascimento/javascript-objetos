/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(obj, 'prop')
...(spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
object.defineProperties (define várias propriedades)
object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Produto', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));


