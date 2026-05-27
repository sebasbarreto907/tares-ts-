abstract class Vehiculo {
    marca: string;
    modelo: string;
    anio: number;

    constructor(marca: string, modelo: string, anio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    encender() {
        console.log(`El vehículo se ha encendido`);
    }

    abstract mover(): void;
}

class Auto extends Vehiculo {
    mover(): void {
        console.log("El auto se mueve por la carretera");
    }
}

class Moto extends Vehiculo {
    mover(): void {
        console.log("La moto avanza rápidamente");
    }
}

class Camion extends Vehiculo {
    mover(): void {
        console.log("El camión transporta carga pesada");
    }
}

const vehiculos: Vehiculo[] = [
    new Auto("Toyota", "Corolla", 2020),
    new Moto("Yamaha", "MT-07", 2021),
    new Camion("Volvo", "FH", 2018),
];

vehiculos.forEach(v => {
    v.encender();
    v.mover();
});
