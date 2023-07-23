// Acceder a un elemento con su ID
let enlace = document.getElementById("enlace1");
let enlace_texto = enlace.textContent;
let enlace_href = enlace.getAttribute("href");

console.group('Mostrar contenidos recogidos')
console.info("Texto de enlace: " + enlace_texto);
console.info("Destino de enlace: " + enlace_href);
console.groupEnd();