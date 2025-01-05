const valueA = 30;
const valueB = 3;

function isDivisible(valueA, valueB){
    return (valueA % valueB) === 0 ? true : false;
}

let result = isDivisible(valueA, valueB);

console.info(`This values ${valueA} and ${valueB} are divisible? ${result ? "Yes" : "No"}`);
