// Getter e Setter
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    }
}

const produto1 = criaProduto('Camiseta');
produto1.nome = 'Xablau!';
console.log(produto1.nome);


