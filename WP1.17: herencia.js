class CocheElectrico extends Coche {
	constructor(numero_pasajeros, capacidad_maletero, potencia, autonomia) {
		super(numero_pasajeros, capacidad_maletero, potencia);
		this.combustible = "Eléctrico";
		this.autonomia = autonomia;
	}

	repostar() { 
        console.info("Cargando batería... ¡Cargada!"); 
    }
}

class CocheGasolina extends Coche {
	constructor(numero_pasajeros, capacidad_maletero, potencia, consumo) {
		super(numero_pasajeros, capacidad_maletero, potencia);
		this.combustible = "Gasolina";
		this.consumo = consumo;
	}

	repostar() { 
        console.info("Llenando depósito... ¡Lleno!"); 
    }
}

// Crear un objeto de cada clase
let electrico = new CocheElectrico(5, 100, 120, 500);
let gasolina = new CocheGasolina(5, 100, 120, 5);

// Los métodos comunes funcionan igual y son independientes en cada objeto
console.group('Acelerar ambos coches')
electrico.acelerar();				// Acelerar hasta 10
gasolina.acelerar();				// Acelerar hasta 10
console.groupEnd();

// El método polimórfico de cada objeto hace su propio trabajo
console.group('Repostar ambos coches')
electrico.repostar();				// Cargando batería... ¡Cargada!
gasolina.repostar();				// Llenando depósito... ¡Lleno!
console.groupEnd();