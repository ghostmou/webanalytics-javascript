console.group('Ejemplo uso de condicionales');

// Definimos dos números
const numero1 = 12;
const numero2 = 5

// ¿Es uno mayor que el otro?
if (numero1 >= numero2) {
	console.info(numero1 + " es mayor o igual que " + numero2);
} else {
	console.info(numero2 + " es menor que " + numero1);
}

// ¿Es mayor que 2?
if (numero1 > 2) {
	console.info(numero1 + " mayor que 2");
}

console.groupEnd();