const initialNumber = 1;
const finalNumber = 45;

function sumInterpolationNumbers(initialNumber, finalNumber){
    
    let result1 = 0;
    let result2 = 0;

    do{
        result1 += initialNumber;
    } while(result1 < finalNumber);

    for(let i = 1; i <= finalNumber; i++){
        result2 += i;
    }

     return {result1, result2};
}

let {result1, result2} = sumInterpolationNumbers(initialNumber, finalNumber);

console.info(`The sum from number ${initialNumber} to ${finalNumber} is ${result1}`);

console.info(`The sum from number ${initialNumber} to ${finalNumber} is ${result2}`);