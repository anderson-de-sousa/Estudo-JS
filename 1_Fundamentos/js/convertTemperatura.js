const celsius = 30;
const fahrenheit = 30;

function convertToFahrenheit(temperaturaCelsius){
    return (temperaturaCelsius * 9) / 5 + 32;
};

function convertToCelsius(temperaturaFahrenheit){
    return ((temperaturaFahrenheit - 32) * 5) / 9;
}

console.log(`Converter valor Celcius ${celsius} em Fahrenheit: ${convertToFahrenheit(celsius)}`);

console.log(`Converter valor Fahrenheit ${fahrenheit} em Celcius: ${convertToCelsius(fahrenheit)}`);
