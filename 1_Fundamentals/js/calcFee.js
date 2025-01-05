function defineFee(age, profile){
    
    let finalFee = 2.50;
    
    if (age <= 6){
        finalFee = 0;
    } else if (profile === "student"){
        finalFee = finalFee - (finalFee * (50/100));
    } else if (age > 59){
        finalFee = finalFee - (finalFee * (30/100));
    }
    return finalFee;
}

let result = defineFee(10, "student");

console.info(`The fee is ${result === 0 ? "Free" : result}`);

result = defineFee(10, "-");

console.info(`The fee is ${result === 0 ? "Free" : result}`);

result = defineFee(22, "-");

console.info(`The fee is ${result === 0 ? "Free" : result}`);

result = defineFee(45, "-");

console.info(`The fee is ${result === 0 ? "Free" : result}`);

result = defineFee(76, "-");

console.info(`The fee is ${result === 0 ? "Free" : result}`);

result = defineFee(65, "student");

console.info(`The fee is ${result === 0 ? "Free" : result}`);

result = defineFee(39, "student");

console.info(`The fee is ${result === 0 ? "Free" : result}`);

result = defineFee(29, "-");

console.info(`The fee is ${result === 0 ? "Free" : result}`);

result = defineFee(6, "student");

console.info(`The fee is ${result === 0 ? "Free" : result}`);