const primeNumberLimit = 100;

function isPrime(number){
    if (number <= 1){
        return false;
    }

    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

function discoverPrimeNumber(primeNumberLimit){

    const primes = [];

    for(let number = 2; number <= primeNumberLimit; number++){
        if (isPrime(number)){
            primes.push(number);
        }
    }

    return primes;
}

let result = discoverPrimeNumber(primeNumberLimit);

console.info(`Prime Numbers: ${result}`);