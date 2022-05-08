// utilizar o operador spread para copiar um objeto é uma melhor opção
const produto = { nome: 'Produto', preco: 1.8 };
const caneca =  Object.assign({}, produto, { material: 'plastico' });

console.log(produto);
console.log(caneca);