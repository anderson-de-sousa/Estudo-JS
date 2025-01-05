const numberA = 10;
const numberB = 5;

function calculate(numberA, numberB, operator){
    let result = 0;
    switch(operator){
        case '+':
            result = numberA + numberB;
        break;
        case '-':
            result = numberA - numberB;
        break;
        case '*':
            result = numberA * numberB;
        break;
        case '/':
            result = numberA / numberB;
        default:
            result = "Invalid operator";
    }
    return result;
}

let result = calculate(numberA, numberB, '+');

console.info(`The result is ${result} using +`);

result = calculate(numberA, numberB, '/');

console.info(`The result is ${result} using /`);

result = calculate(numberA, numberB, '*');

console.info(`The result is ${result} using *`);

result = calculate(numberA, numberB, '-');

console.info(`The result is ${result} using -`);

result = calculate(numberA, numberB, 'a');

console.info(`The result is ${result} using a`);