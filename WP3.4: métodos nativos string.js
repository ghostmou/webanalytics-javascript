console.group('Métodos natrivos para strings')

// Cadenas de texto a usar
console.group('Creación datos de entrada');
let url1 = "https://www.ejemplo1.tld";
let url2 = "http://www.ejemplo2.tld/slug1";
let url3 = "https://www.ejemplo3.tld/slug1/slug2/";
console.info('url1 = ' + url1);
console.info('url2 = ' + url2);
console.info('url3 = ' + url3);
console.groupEnd();

console.group('Pruebas de métodos sobre strings');

// Coger carácter en una posición concreta
console.info("Segundo carácter url1: url1.charAt(1): " + url1.charAt(1));

// Empieza o acaba por algo
console.info("url3 acaba por /: url3.endsWith('/'): " + url3.endsWith("/"));
console.info("url1 Empieza por https: url1.startsWith('https'): " + url1.startsWith("https"));

// Valida una expresión regular
console.info("url3 valida URL con HTTPS: url3.match(/^https:\/\//i): " + url3.match(/^https:\/\//i));

// Reemplazar contenido de un String
console.info("url2 reemplaza http: por https: url2.replace('http:'', 'https:''): " + url2.replace("http:", "https:"));

console.groupEnd();

console.groupEnd();