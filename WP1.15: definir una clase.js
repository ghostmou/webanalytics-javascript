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
