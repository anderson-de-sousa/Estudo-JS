const valorA = 31;
const valorB = 3;

function ehDivisivel(valorA, valorB){
    return (valorA % valorB) === 0 ? true : false;
}

let resultado = ehDivisivel(valorA, valorB);

console.info(`Os valores ${valorA} e ${valorB} são divisíveis: ${resultado ? "Sim" : "Não"}`);
