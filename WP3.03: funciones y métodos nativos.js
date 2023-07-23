// SIN usar una función nativa
// Comprobar si una URL contiene HTTPS
console.group('Comprobar si una URL contiene HTTPS sin métodos nativos');
const url = "https://www.ejemplo.tld";
console.info('URL: ' + url);

console.group('Construir inicio de la URL insertada mediante primeros 5 caracteres')
let start_url = '';
for (let i = 0; i <= 4; i++) {
    start_url += url[i];
}
console.info('Inicio primeros 5 caracteres: ' + start_url);
console.groupEnd();

console.group('Comprobar si empieza por HTTPS')
if (start_url == "https") {
  console.log("La URL es HTTPS");
} else {
  console.log("La URL no es HTTPS");
}
console.groupEnd();

console.groupEnd();