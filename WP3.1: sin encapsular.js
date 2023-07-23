// Detectar si un número es par o impar
let numero1 = 2;
let numero2 = 3;

console.group('Comprobación de pares e impares');
console.log(numero1 + " es par: " + (numero1 % 2 == 0));
console.log(numero2 + " es par: " + (numero2 % 2 == 0));
console.log(numero1 + " es impar: " + (numero1 % 2 != 0));
console.log(numero2 + " es impar: " + (numero2 % 2 != 0));
console.groupEnd();