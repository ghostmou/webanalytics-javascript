// Declara un array con números
let lista_numeros = [8, 12, 2, 1, 5, 7, 9];

// Declara un array con nombres de frutas
let lista_frutas = ["manzana", "plátano", "naranja"];

// Coge el contenido de la posición 4 del array de números
let posicion_4 = lista_numeros[3];   	// devuelve 1
let posicion_2 = lista_frutas[1];		// devuelve plátano

// Cambiar el valor de la posición 2
lista_numeros[2] = 64;

// Añadir un valor nuevo
lista_numeros.push(128);

console.info("Lista de números: " + lista_numeros);

// Coge la fruta en la posición del valor recuperado
let fruta_encontrada = lista_frutas[posicion_4];
console.info("En la posición " + posicion_4 + " encontramos la fruta " + fruta_encontrada);
