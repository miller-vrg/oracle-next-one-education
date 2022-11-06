import { Cliente } from "./Clientes.js";

const cliente1 = new Cliente("Miler");
cliente1.DNI = 1010;
cliente1.rutCliente1 = 123123;
cliente1.cuenta.numero = "12313";
cliente1.cuenta.agencia = "BVBA";
cliente1.cuenta.depositar(500);
cliente1.cuenta.retirar(100);
cliente1.verSaldo();

const cliente2 = new Cliente("Jose");
cliente2.DNI = 123;
cliente2.rutCliente1 = 345;
cliente2.cuenta.numero = "345";
cliente2.cuenta.agencia = "Nequi";

cliente1.cuenta.hacerTransferencia(300, cliente2);
cliente1.verSaldo();
cliente2.verSaldo();

cliente1.cuenta.hacerTransferencia(200, cliente2);
cliente1.verSaldo();
cliente2.verSaldo();

console.log(Cliente.cuentas);
