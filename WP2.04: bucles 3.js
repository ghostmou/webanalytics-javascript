// Bucle para recorrer un array
console.group('Recorrer un array con un forEach');

const personas = ["María", "Juan", "Ana", "Carlos"];
console.info('Recorremos array: ' + personas);

personas.forEach(function(persona) {
  console.log('Persona: ' + persona);
});

console.groupEnd();