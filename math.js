console.group('Cuadrado') 

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}

console.groupEnd('Cuadrado') 

console.group('Triangulo')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}

function calcularAlturaTriangulo (lado, base) {
  if (lado == base) return console.warn(`Este no es un triángulo isosceles`);

 return Math.sqrt(Math.pow(lado, 2) - (Math.pow(base,2) / 4))
}

function calcularAlturaTrianguloEscaleno (lado1, lado2, lado3) {
  if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) return console.warn(`Este no es un triángulo escaleno, todos sus lados deben ser diferentes`);

  let s = ((lado1 + lado2 + lado3) / 2)    /* Semiperimetro */


  return Math.round(Math.sqrt(Math.pow(lado3, 2) - Math.pow(((Math.pow(lado3, 2)) - (Math.pow(lado2, 2)) + (Math.pow(lado2, 2)))/ (2 * lado2),2)))
}

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});

console.groupEnd('Triangulo') 

console.group('Circle')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  areaCirculo,
});

function calcularCirculo(radio) {
  const diametro = radio * 2;
  const radioAlCuadrado = Math.pow(radio, 2);
  
  return {
    circunferencia: diametro * Math.PI,
    area: radioAlCuadrado * Math.PI,
  };
}

console.groupEnd('Circle')


