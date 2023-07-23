class Coche {
	constructor(numero_pasajeros, capacidad_maletero, potencia) {
		this.numero_pasajeros = numero_pasajeros;
		this.capacidad_maletero = capacidad_maletero;
		this.potencia = potencia;
		this.velocidad = 0;
	}

	acelerar() {
		this.velocidad += 10; 
        console.info("Acelerar hasta " + this.velocidad);
	}

	frenar () {
		this.velocidad -= 10; 
        console.info("Frenar hasta " + this.velocidad);
	}

	girar(direccion) {
		console.info("Girar hacia " + direccion);
	}
}


// Crear un objeto: instanciar una clase
// recuerda: constructor(numero_pasajeros, capacidad_maletero, potencia)
let coche = new Coche(5, 100, 120);

// Comprobamos la velocidad del coche
console.group('Estado inicial del coche');
console.info('Velocidad: ' + coche.velocidad);		// 0: no hemos acelerado
console.info('Capacidad de pasajeros: ' + coche.numero_pasajeros);
console.info('Capacidad del maletero: ' + coche.capacidad_maletero)
console.info('Potencia: ' + coche.otencia);
console.groupEnd();

// Acelerar dos veces
console.group('Acelerar')
coche.acelerar();						// Acelerar hasta 10
coche.acelerar();						// Acelerar hasta 20
console.info('Velocidad tras acelerar: ' + coche.velocidad);		// 20: hemos acelerado 2 veces
console.groupEnd();

// Frenar una vez
console.group('Frenar')
coche.frenar();						// Frenar hasta 10
console.info("Velocidad tras frenar: " + coche.velocidad);		// 10: hemos reducido
console.groupEnd();

// Girar a la izquierda y luego a la derecha
coche.girar("izquierda");
coche.girar("derecha");
