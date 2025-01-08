const numberLimit = 15;

function multiplay(numberLimit, multiplyChoise){

    let result = 0;

    for (i = 1; i <= numberLimit; i++){

        result = result + multiplyChoise;
        console.info(`${multiplyChoise} * ${i} = ${result}`);
    }
}

multiplay(numberLimit, 1);
console.info(`=====`);
multiplay(numberLimit, 5);
console.info(`=====`);
multiplay(numberLimit, 2);
console.info(`=====`);
multiplay(numberLimit, 7);
console.info(`=====`);
multiplay(numberLimit, 9);