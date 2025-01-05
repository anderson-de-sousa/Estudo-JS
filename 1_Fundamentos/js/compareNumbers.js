const valueA = 12;
const valueB = 12;

function compareNumbers(valueA, valueB){

    let result = "";

    if(Number.isNaN(valueA) || Number.isNaN(valueB)){
        result = "not number";
    }else if (valueA > valueB){
        result = "bigger";
    }else if (valueA === valueB){
        result = "equal";
    } else {
        result = "smaller";
    }
    return result;
}

let result = compareNumbers(valueA, valueB);

console.info(`The first number ${valueA} is ${result} than number ${valueB}`);