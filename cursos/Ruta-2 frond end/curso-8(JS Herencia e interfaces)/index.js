import { Cliente } from "./Cliente.js";
import { CuentaNomina } from "./cuentas/CuentaNomina.js";
import { Director } from "./Empleados/Director.js";
import { Gerente } from "./Empleados/Gerente.js";

// const cliente1 = new Cliente("Miler");
// cliente1.DNI = 1010;
// cliente1.rutCliente1 = 123123;
// cliente1.cuenta = new CuentaNomina("1222","Nequi");
// cliente1.cuenta.depositar(500);
// cliente1.cuenta.retirar(100,2);
// console.log(cliente1);

// in permite ver si exite 
// instanceof permite ver que tipo de objeto es 

const gerente = new Gerente("Pedro","1231321",200);
const director = new Director("Manuel","23445",400);

console.log(gerente.verBonificacion());
console.log(director.verBonificacion());