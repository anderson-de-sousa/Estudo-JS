const length = 10;
const width = 5;
let area = 0;
let perimeter = 0;

function calcArea(length, width){
    return length * width;
};

function calcPerimeter(length, width){
    return 2 * (length + width);
};

area = calcArea(length, width);
perimeter = calcPerimeter(length, width);

console.log(`The length of ${length}mt and width of ${width}mt, is ${area}mt of area`);

console.log(`The length of ${length}mt and width of ${width}mt, is ${perimeter}mt of perimeter`);