export class CuentaCorriente {
  numero;
  #saldo;
  agencia;
  flag;

  constructor() {
    this.saldo = 0;
    this.numero = "";
    this.agencia = "";
    this.flag = true;
  }

  depositar = (deposito) => {
    let temp = this.saldo + deposito;
    this.saldo = temp;
    console.log("Deposito exitoso nuevo fondo:", this.saldo);
  };

  retirar = (retiro) => {
    let temp = this.saldo - retiro;
    this.flag = temp < 0;

    if (!this.flag) {
      this.saldo = temp;
      console.log("Retiro exitoso nuevo fondo:", this.saldo);
      return;
    }

    console.log("Retiro cancelado por saldo insuficiente");
  };

  hacerTransferencia(valor, cliente) {
    let temp = this.saldo - valor;
    this.flag = temp < 0;

    if (!this.flag) {
      this.saldo = temp;
      valor += cliente.cuenta.saldo;
      cliente.cuenta.saldo = valor;
      console.log(`Trasnferencia a ${cliente.nombre} exitosa.`);
      return;
    }
    console.log("Transferenci cancelada por falat de fondos");
  }

  get saldo() {
    return this.#saldo;
  }
  set saldo(saldo) {
    this.#saldo = saldo;
  }
}
