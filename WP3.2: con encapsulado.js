// Función que comprueba si un número es par
function es_par(x) {
	if (x % 2 == 0) {
		return true;
	} else {
		return false;
	}
}

// Detectar si un número es par o impar
let numero1 = 2;
let numero2 = 3;

console.group('Detectar si un número es par o impar mediante es_par(x)');
console.log('es_par(' + numero1 + ") : " + es_par(numero1));
console.log('es_par(' + numero2 + ") : " + es_par(numero2));
console.log('!es_par(' + numero1 + ") (es impar) : " + !es_par(numero1));
console.log('!es_par(' + numero2 + ") (es impar) : " + !es_par(numero2));
console.groupEnd();
