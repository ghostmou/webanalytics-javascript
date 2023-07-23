// Acceder a un elemento con su ID
let ps_lightgray = document.getElementsByClassName('p_lightgray');

console.group('Mostrar contenidos recogidos');
console.info(ps_lightgray);
console.groupEnd();

console.group('Iterar contenidos recogidos');
for(let i = 0; i < ps_lightgray.length; i++) {
    console.info('P with class "ps_lightgray" number ' + i + ": " + ps_lightgray[i].innerText);
}
console.groupEnd();