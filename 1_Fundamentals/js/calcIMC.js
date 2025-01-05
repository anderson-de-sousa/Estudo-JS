const height = 1.71;
const weight = 87;

function calcIMC(height, weight){
    return (weight / (height * height)).toFixed(2);
}

console.log(`The height of ${height}mt and weight of ${weight}kg, the IMC is ${calcIMC(height, weight)}`);