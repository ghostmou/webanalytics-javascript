// Función con control de excepciones
function intentar_raiz_cuadrada(x) {
    let raiz = NaN;
    try {
    	raiz = Math.sqrt(x);
    	if (isNaN(raiz))
            throw new Error("No es posible calcular sobre " + x);
    	console.info("Raíz de " + x + "=" + raiz);

        return raiz;
    } catch (err) {
        console.error('Error encontrado: ' + err);
    } finally {  // esto es opcional siempre
    	console.info("Fin del intento");
        return raiz;
    }
}

console.group("Calcular la raíz de 42");
intentar_raiz_cuadrada(42)
console.groupEnd();

console.group("Calcular la raíz de -42");
intentar_raiz_cuadrada(-42)
console.groupEnd();
