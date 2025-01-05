const comprimento = 10;
const largura = 5;
let area = 0;
let perimetro = 0;

function calcArea(comprimento, largura){
    return comprimento * largura;
};

function calcPerimetro(comprimento, largura){
    return 2 * (comprimento + largura);
};

area = calcArea(comprimento, largura);
perimetro = calcPerimetro(comprimento, largura);

console.log(`De acordo com o comprimento de ${comprimento}mt e a largura de ${largura}mt, o valor da área é ${area}mt`);

console.log(`De acordo com o comprimento de ${comprimento}mt e a largura de ${largura}mt, o valor do perímetro é ${perimetro}mt`);