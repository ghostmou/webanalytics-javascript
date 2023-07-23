// Función que intenta convertir una cadena de texto a una fecha
function texto_a_fecha(cadena) {
	try {
		var fecha = new Date(cadena);
		if (isNaN(fecha)) {
			throw new Error("La cadena no puede ser convertida");
		}
		return fecha;
    } catch (err) {
    	console.error("[texto_a_fecha] " + err);
    	return undefined;
    }
}

texto_a_fecha("2023-7-1");
//Sat Jul 01 2023 00:00:00 GMT+0200 (Central European Summer Time)

texto_a_fecha("hola");
//[texto_a_fecha] Error: La cadena no puede ser convertida