// Recogemos elemento para el que queremos detectar el cambio
let element_study_class = document.getElementById('studyClass');

// Añadimos listener de cambio de opción elegida
element_study_class.addEventListener("change", function(event) {
   console.info('El usuario ha escogido "' + element_study_class.value + '"');
});