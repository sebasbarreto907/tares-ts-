abstract class CuentaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldoInicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(cantidad: number): void {
        if (cantidad <= 0) throw new Error('La cantidad a depositar debe ser mayor que 0');
        this.saldo += cantidad;
        console.log(`${this.titular} depositó $${cantidad.toFixed(2)}. Saldo: $${this.saldo.toFixed(2)}`);
    }

    retirar(cantidad: number): void {
        if (cantidad <= 0) throw new Error('La cantidad a retirar debe ser mayor que 0');
        if (cantidad > this.saldo) {
            throw new Error('Saldo insuficiente');
        }
        this.saldo -= cantidad;
        console.log(`${this.titular} retiró $${cantidad.toFixed(2)}. Saldo: $${this.saldo.toFixed(2)}`);
    }

    abstract calcularInteres(): number;

    aplicarInteres(): void {
        const interes = this.calcularInteres();
        this.saldo += interes;
        console.log(`${this.titular} recibió $${interes.toFixed(2)} de interés. Saldo: $${this.saldo.toFixed(2)}`);
    }
}

class CuentaAhorros extends CuentaBancaria {
    calcularInteres(): number {
        return this.saldo * 0.03; // 3%
    }
}

class CuentaCorriente extends CuentaBancaria {
    calcularInteres(): number {
        return this.saldo * 0.01; // 1%
    }
}

class CuentaEmpresarial extends CuentaBancaria {
    calcularInteres(): number {
        // Interés escalonado: 2.5% si saldo > 10000, sino 1.5%
        return this.saldo * (this.saldo > 10000 ? 0.025 : 0.015);
    }
}

// Ejemplo y prueba de validación de retiros insuficientes
const cuentas: CuentaBancaria[] = [
    new CuentaAhorros('Juan', 1000),
    new CuentaCorriente('María', 300),
    new CuentaEmpresarial('Empresa X', 15000),
];

// Operaciones de ejemplo
try {
    cuentas[0]!.depositar(500);
    cuentas[0]!.retirar(2000); // intentará retirar más del saldo para provocar error
} catch (err: any) {
    console.log(`Error en operación: ${err.message}`);
}

try {
    cuentas[1]!.retirar(100); // válido
} catch (err: any) {
    console.log(`Error en operación: ${err.message}`);
}

cuentas.forEach(c => c.aplicarInteres());
