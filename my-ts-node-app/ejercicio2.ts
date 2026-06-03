// ===== INTERFACES =====
interface IEmpleado {
    nombre: string;
    salarioBase: number;
    
    mostrarInformacion(): void;
    calcularSalario(): number;
}

// ===== CLASE ABSTRACTA =====
abstract class Empleado implements IEmpleado {
    nombre: string;
    salarioBase: number;

    constructor(nombre: string, salarioBase: number) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
    }

    mostrarInformacion(): void {
        console.log(`Empleado: ${this.nombre}`);
        console.log(`Salario Base: $${this.salarioBase}`);
    }

    abstract calcularSalario(): number;
}

// ===== SUBCLASES =====
class Desarrollador extends Empleado {
    calcularSalario(): number {
        const bono = this.salarioBase * 0.15; // 15% de bono
        return this.salarioBase + bono;
    }
}

class Diseñador extends Empleado {
    calcularSalario(): number {
        const bono = this.salarioBase * 0.10; // 10% de bono
        return this.salarioBase + bono;
    }
}

class Gerente extends Empleado {
    calcularSalario(): number {
        const bono = this.salarioBase * 0.25; // 25% de bono
        return this.salarioBase + bono;
    }
}

// ===== EJEMPLO DE USO CON POLIMORFISMO =====
const empleados: Empleado[] = [
    new Desarrollador("Juan", 3000),
    new Diseñador("María", 2500),
    new Gerente("Carlos", 5000),
    new Desarrollador("Ana", 3200),
    new Diseñador("Pedro", 2400)
];

console.log("===== INFORMACIÓN DE EMPLEADOS =====\n");

// Recorrer usando polimorfismo
empleados.forEach((empleado) => {
    empleado.mostrarInformacion();
    console.log(`Salario Total: $${empleado.calcularSalario()}`);
    console.log("---");
});

// Calcular nómina total
const totalNomina = empleados.reduce((total, empleado) => {
    return total + empleado.calcularSalario();
}, 0);

console.log(`\nNómina Total: $${totalNomina}`);