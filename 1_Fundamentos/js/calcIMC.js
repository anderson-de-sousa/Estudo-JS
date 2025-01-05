const altura = 1.71;
const peso = 87;

function calcIMC(altura, peso){
    return (peso / (altura * altura)).toFixed(2);
}

console.log(`Para sua altura de ${altura}mt e peso de ${peso}kg, o seu IMC é de ${calcIMC(altura, peso)}`);