// Nota: ejecuta cada una de estas instrucciones erróneas en la propia consola
// para poder experimentar mejor con el mensaje devuelto.

// Reference error
console.info(variable_no_declarada);
// Uncaught ReferenceError: variable_no_declarada is not defined

// Error de tipo
let numero = 42;
console.info(42.startsWith("http"));
// Uncaught SyntaxError: Invalid or unexpected token

// Error de sintaxis: hemos olvidado cerrar con )
console.info("Hola mundo!";
// Uncaught SyntaxError: missing ) after argument list
