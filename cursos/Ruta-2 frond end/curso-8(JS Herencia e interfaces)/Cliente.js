import { CuentaAhorro } from "./cuentas/CuentaAhorro.js";
import { CuentaCorriente } from "./cuentas/CuentaCorriente.js";
import { CuentaNomina } from "./cuentas/CuentaNomina.js";

export class Cliente {
  nombre;
  DNI;
  rutCliente;
  #cuenta;

  static cuentas = 0;

  constructor(nombre) {
    this.nombre = nombre;
    this.DNI = 0;
    this.rutCliente = 0;
    Cliente.cuentas++;
    console.log("Es de nuestro agrado tenerte aquí", nombre);
  }

  verSaldo = () => {
    console.log("==============================================");
    console.log(
      `${this.nombre} tu saldo de cuenta corriente es de`,
      this.cuenta.saldo
    );
    console.log("==============================================");
  };

  get cuenta() {
    return this.#cuenta;
  }
  set cuenta(cuenta) {
   let flag =
      cuenta instanceof CuentaAhorro ||
      cuenta instanceof CuentaCorriente ||
      cuenta instanceof CuentaNomina;
    if (!flag) {
      throw new Error("Esto no es un objeto valido para cuenta");
    }
    this.#cuenta = cuenta;
  }
}
