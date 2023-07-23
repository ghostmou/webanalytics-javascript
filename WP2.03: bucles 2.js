// Bucle para recorrer un array
console.group('Recorrer un array con un for');

const personas = ["María", "Juan", "Ana", "Carlos"];
console.info('Recorremos array: ' + personas);

for (let i = 0; i < personas.length; i++) {
  console.log('Persona ' + i + ': ' + personas[i]);
}

console.groupEnd();