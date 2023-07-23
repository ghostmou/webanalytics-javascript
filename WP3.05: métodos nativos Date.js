console.group('Métodos natrivos para Date')

console.group('Creación datos de entrada');
// 15 de junio de 2022 a las 16:06:02
let fecha_con_hora = new Date(2022, 6, 15, 16, 6, 2);
console.info('fecha_con_hora = ' + fecha_con_hora);
console.groupEnd();

console.group('Pruebas de métodos sobre date');

// Presentar Date con formato cultural de España
// como cadena de texto con zona horaria del Pacífico
console.info('Date con formato cultural de España en castellano con zona del Pacífico: ' +
             fecha_con_hora.toLocaleString("es-ES", { timeZone: "America/Los_Angeles" }));

// Presentar ahora con formato cultural de US en inglés
console.info('Date con formato cultural para US en inglés: ' + 
             fecha_con_hora.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));

// Fecha en formato ISO 8601 (muy usado en trackers)
console.info('Date con formato ISO 8601: ' +
             fecha_con_hora.toISOString());

// Recoger número que representa la fecha (timestamp)
console.info('Número que representa la fecha (timestamp): ' + fecha_con_hora.getTime());

// Extraer componentes de la fecha
console.info('Componente año: ' + fecha_con_hora.getFullYear());
console.info('Componente mes: ' + fecha_con_hora.getMonth());
console.info('Componente día: ' + fecha_con_hora.getDate());

console.groupEnd();

console.groupEnd();