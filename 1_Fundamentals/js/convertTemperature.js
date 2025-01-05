const celsius = 30;
const fahrenheit = 30;

function convertToFahrenheit(temperatureCelsius){
    return (temperatureCelsius * 9) / 5 + 32;
};

function convertToCelsius(temperatureFahrenheit){
    return ((temperatureFahrenheit - 32) * 5) / 9;
}

console.log(`${celsius} Celcius in Fahrenheit is: ${convertToFahrenheit(celsius)}`);

console.log(`${fahrenheit} Fahrenheit in Celcius is: ${convertToCelsius(fahrenheit)}`);
