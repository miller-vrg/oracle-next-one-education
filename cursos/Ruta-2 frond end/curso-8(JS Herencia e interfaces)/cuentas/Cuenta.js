export class Cuenta{
    numero;
    #saldo;
    agencia;
    flag;
    constructor(saldo,numero,agencia) {
        if(this.constructor == Cuenta) throw new Error("Cuenta es una clase abstracta");
        this.saldo = saldo;
        this.numero = numero;
        this.agencia = agencia;
        this.flag = true;
    }

    depositar = (deposito) => {
        this.saldo = this.saldo + deposito;
        console.log("Deposito exitoso nuevo fondo:", this.saldo);
      };
    
      retirar = (retiro) => {
       throw new Error("Retirar es un metodo abstracto debe implementar lo.");
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
        console.log("Transferenci cancelada por falta de fondos");
      }
      get saldo() {
        return this.#saldo;
      }
      set saldo(saldo) {
        this.#saldo = saldo;
      }
}