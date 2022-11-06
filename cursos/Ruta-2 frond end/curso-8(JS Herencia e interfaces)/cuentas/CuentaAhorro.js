import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta{
  constructor(numero,agencia) {
    super(0,numero,agencia);
   }
   retirar = (retiro,comision) => {
    retiro *= comision;
    let temp = this.saldo - retiro;
    this.flag = temp < 0;

    if (!this.flag) {
      this.saldo = temp;
      console.log("Retiro exitoso nuevo fondo:", this.saldo);
      return;
    }

    console.log("Retiro cancelado por saldo insuficiente");
  };
}