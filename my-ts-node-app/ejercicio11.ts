interface CuentaBancaria {
  titular: string;
  saldo: number;
  depositar(monto: number): void;
  retirar(monto: number): void;
  calcularInteres(): number;
}

abstract class CuentaBase implements CuentaBancaria {
  titular: string;
  saldo: number;

  constructor(titular: string, saldoInicial: number) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(monto: number): void {
    if (monto <= 0) {
      console.log('El monto a depositar debe ser mayor que 0.');
      return;
    }
    this.saldo += monto;
    console.log(`${this.titular} depositó $${monto}. Saldo actual: $${this.saldo}.`);
  }

  retirar(monto: number): void {
    if (monto <= 0) {
      console.log('El monto a retirar debe ser mayor que 0.');
      return;
    }
    if (monto > this.saldo) {
      console.log(`Saldo insuficiente para ${this.titular}. Retiro no autorizado.`);
      return;
    }
    this.saldo -= monto;
    console.log(`${this.titular} retiró $${monto}. Saldo actual: $${this.saldo}.`);
  }

  abstract calcularInteres(): number;
}

class CuentaAhorros extends CuentaBase {
  calcularInteres(): number {
    const interes = this.saldo * 0.02; // 2% de interés
    console.log(`Interés de cuenta de ahorros para ${this.titular}: $${interes.toFixed(2)}.`);
    return interes;
  }
}

class CuentaCorriente extends CuentaBase {
  calcularInteres(): number {
    const interes = this.saldo * 0.01; // 1% de interés
    console.log(`Interés de cuenta corriente para ${this.titular}: $${interes.toFixed(2)}.`);
    return interes;
  }
}

class CuentaEmpresarial extends CuentaBase {
  calcularInteres(): number {
    const interes = this.saldo * 0.03; // 3% de interés
    console.log(`Interés de cuenta empresarial para ${this.titular}: $${interes.toFixed(2)}.`);
    return interes;
  }
}

const cuentas: CuentaBancaria[] = [
  new CuentaAhorros('Sofía Martínez', 1500),
  new CuentaCorriente('Juan Pérez', 800),
  new CuentaEmpresarial('Empresa X', 10000),
];

function mostrarOperaciones(cuentas: CuentaBancaria[]): void {
  for (const cuenta of cuentas) {
    console.log('---------------------------');
    console.log(`Titular: ${cuenta.titular}`);
    console.log(`Saldo inicial: $${cuenta.saldo}`);
    cuenta.depositar(200);
    cuenta.retirar(500);
    cuenta.retirar(10000); // retiro que puede ser insuficiente
    cuenta.calcularInteres();
  }
}

mostrarOperaciones(cuentas);
