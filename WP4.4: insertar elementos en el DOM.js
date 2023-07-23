// Crear nuevo elemento
const nuevo_elemento = document.createElement("p");
nuevo_elemento.innerHTML = 'Esto es un párrafo insertado <strong>desde código</strong>.';

// Obtener div principal y párrafo actual
const principal = document.getElementById("principal");
const parrafo = document.querySelector("#principal p");

// Insertar nuevo elemento
principal.insertBefore(nuevo_elemento, parrafo.nextSibling);
