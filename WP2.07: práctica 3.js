// Array originales
console.group('Creación datos de entrada');
let numeros_pares = [];
let numeros_impares = [];
console.info('numeros_pares = ' + numeros_pares)
console.info('numeros_impares = ' + numeros_impares)
console.groupEnd();

// Bucle entre 1 y 20
console.group('Ejecutar bucle entre 1 y 20');
for(let i=1; i <= 20; i++) {
	if (i % 2 == 0) { 			// si es divisible entre 2…
		numeros_pares.push(i);
	} else {						// si no...
		numeros_impares.push(i);
	}
}
console.groupEnd();

console.group('Mostrar resultados')
console.info('numeros_pares = ' + numeros_pares);
console.info('numeros_impares = ' + numeros_impares);
console.groupEnd();
