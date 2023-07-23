// Función sin control de excepciones
function hacer_raiz_cuadrada(x) {
    let raiz = Math.sqrt(x);
    if (isNaN(raiz)) {
        // Nota la siguiente línea se añade para evitar que la consola se quede
        // bloqueada durante la prueba.
        console.groupEnd();
        
        throw new Error("No es posible calcular sobre " + x);
    }
    console.info("Raíz de " + x + "=" + raiz);

    return raiz;
}

console.group("Calcular la raíz de 42");
hacer_raiz_cuadrada(42)
console.groupEnd();

console.group("Calcular la raíz de -42");
hacer_raiz_cuadrada(-42)
console.groupEnd();
