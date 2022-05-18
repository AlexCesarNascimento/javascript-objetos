// 705.484.450-52
// 070.987.720-03

const cpf = '705.484.450-52';
// const cpf = '070.987.720-03';


function transformeCpfArray(cpf) {
    const cpfLimpo = cpf.split('-').map(valor => valor.replace(/\D+/g, ''));
    return cpfLimpo;
}

function validaCPF(cpf) {
    const cpfBody = transformeCpfArray(cpf)[0].split("").map(valor => parseInt(valor));
    const cpfVerificador = transformeCpfArray(cpf)[1].split("").map(valor => parseInt(valor)); 

    const validador1 = cpfBody.reduce((acumulador, valor, indice) => {
        const regressivo = cpfBody.length+1 - indice;
        acumulador += (valor*regressivo)

        return 11 - (acumulador%11.0).toFixed();
    }, 0);
    
    const validadorA = (validador1 > 9.0) ? 0.0 : validador1;

    const cpfBody2 = [...cpfBody, cpfVerificador[0]];
    
    const validador2 = cpfBody2.reduce((acumulador, valor, indice) => {
        const regressivo = (cpfBody2.length+1) - indice;
        acumulador += (valor*regressivo)
        return 11 - (acumulador%11.0);
    }, 0);

    const validadorB = (validador2 > 9.0) ? 0.0 : validador1;
    
    console.log((validadorA ===  cpfVerificador[0])  && (validadorB === cpfVerificador[1]))
    if( (validadorA) ===  cpfVerificador[0]  && ((validadorB) === cpfVerificador[1])) {
        console.log("cpfVerificador[0]:", cpfVerificador[0], "cpfVerificador[1]:",cpfVerificador[1])
        return console.log(`O CPF ${cpf} é válido`);
    } else {
        return console.log(`O CPF ${cpf} é inválido`);
    }
}


if(validaCPF(cpf)){
    console.log(`O CPF ${cpf} é válido`);
} else {
    console.log(`O CPF ${cpf} é inválido`);
}

