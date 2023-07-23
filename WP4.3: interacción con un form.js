// Recoger email del usuario
let email = document.getElementById("email").value;

// Recoger clase seleccionada
let study_class = document.getElementById("studyClass").value;

// Recoger nivel
let level_value = null;
let level_fields = document.getElementsByName("studyLevel");

for (let i = 0; i < level_fields.length; i++) {
    if (level_fields[i].checked) { 
        level_value = level_fields[i].value; 
    }
}

console.info("Email: " + email.value);
console.info("Clase: " + study_class);
console.info("Nivel: " + level_value);
