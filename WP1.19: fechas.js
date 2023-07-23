console.group('Ejemplos trabajo con horas');

// Declarar una fecha mediante cadena de texto
let fecha_texto = new Date("2023-07-15 UTC");
console.info('Fecha desde texto (Date("2023-07-15 UTC")): ' + fecha_texto);

// Declarar mediante parámetros de fecha
// 15 de junio de 2022: los meses empiezan desde 0 y no desde 1
let fecha_fecha = new Date(2022, 6, 15);
console.info('Fecha desde parámetros (Date(2022, 6, 15)): ' + fecha_fecha);

// Declarar fecha y hora
// 15 de junio de 2022 a las 16:06:02
let fecha_con_hora = new Date(2022, 6, 15, 16, 6, 2);
console.info('Fecha con hora (Date(2022, 6, 15, 16, 6, 2)): ' + fecha_con_hora);

console.groupEnd();