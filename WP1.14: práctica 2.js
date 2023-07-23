// Declaramos las variables de URL
let url1 = "https://www.ejemplo.tld/url-1";
let url2 = "https://www.ejemplo.tld/url-2";
let url3 = "https://www.ejemplo.tld/url-3";
let url4 = "https://www.ejemplo.tld/url-3";

// Declara el nuevo listado
let listado = [url1];

console.group('Creación datos de entrada');
console.info('url1 = ' + url1);
console.info('url2 = ' + url2);
console.info('url3 = ' + url3);
console.info('url4 = ' + url4);
console.groupEnd();

// Añade lo que se pide
console.group('Añadir datos mediante push');
listado.push(url2);			//[url1, url2]
console.info('Tras añadir url2: ' + listado);
listado.push(url3);			//[url1, url2, url3]
console.info('Tras añadir url3: ' + listado);
console.groupEnd();

// Retira lo que se pide
console.group('Retirar posiciones mediante shift y pop');
console.info('Array actual: ' + listado);
listado.shift();				//[url2, url3]
console.info('Tras usar shift: ' + listado);
listado.pop();			//[url2]
console.info('Tras usar pop: ' + listado);
console.groupEnd();

console.info('Array final: ' + listado);
