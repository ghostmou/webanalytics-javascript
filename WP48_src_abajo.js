console.info('Esto se ha cargado desde un fichero externo llamado WP48_src_abajo.js')

// Crear nuevo elemento
const nuevo_elemento = document.createElement("p");
nuevo_elemento.innerHTML = 'Esto es un párrafo insertado <strong>desde el fichero externo llamado WP48_src_abajo.js</strong>.';

// Obtener div principal y párrafo actual
const principal = document.getElementById("principal");
const parrafo = document.querySelector("#principal p");

// Insertar nuevo elemento
principal.insertBefore(nuevo_elemento, parrafo.nextSibling);
