// Crea una cola de URLs
let urls = ["URL1", "URL2", "URL3", "URL4"]

console.group('Ejemplos de uso de push');
console.info('Array inicial: ' + urls);

// Añade una URL nueva
urls.push("URL5");
console.info('Tras push URL5: ' + urls);

// Añade otra URL más
urls.push("URL6");
console.info('Tras push URL6: ' + urls);
console.groupEnd();

// Coge y retira URL de la última posición
// (ir atrás en el navegador)
let ultima_url = urls.pop();
console.group('Extraer última URL mediante pop (1)');
console.log('Extraída mediante pop: ' + ultima_url);
console.info('Tras pop última URL: ' + urls);
console.groupEnd();

ultima_url = urls.pop();
console.group('Extraer última URL mediante pop (2)');
console.log('Extraída mediante pop: ' + ultima_url);
console.info('Tras pop última URL: ' + urls);
console.groupEnd();

ultima_url = urls.pop();
console.group('Extraer última URL mediante pop (3)');
console.log('Extraída mediante pop: ' + ultima_url);
console.info('Tras pop última URL: ' + urls);
console.groupEnd();