import { CuentaCorriente } from "./CuentaCorriente.js";

export class Cliente {
  nombre;
  DNI;
  rutCliente;
  #cuenta;
  static cuentas = 0;
  constructor(nombre) {
    this.nombre = nombre;
    this.cuenta = new CuentaCorriente();
    this.DNI = 0;
    this.rutCliente = 0;
    Cliente.cuentas++;
    console.log("Es de nuestro agrado tenerte aquí", nombre);
  }
  verSaldo = () => {
    console.log(`${this.nombre} tu saldo es de`, this.cuenta.saldo);
  };

  set cuenta(cuenta) {
    if (cuenta instanceof CuentaCorriente) {
      this.#cuenta = cuenta;
    }else{
      console.log("Esto no es un objeto de la clase CuentaCorriente");
    }
  }

  get cuenta() {
    return this.#cuenta;
  }
}
