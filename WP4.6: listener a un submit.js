// Recogemos elemento para el que queremos detectar el cambio
let form_1 = document.getElementById('form_1');

// Añadimos listener de cambio de opción elegida
form_1.addEventListener("submit", function(event) {
   console.info('¡El usuario ha enviado el formulario!');

    // Esto es solo para poder hacer pruebas: evitamos que se haga el submit
    event.preventDefault();
});