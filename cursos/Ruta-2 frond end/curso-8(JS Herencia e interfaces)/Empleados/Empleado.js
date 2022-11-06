export class Empleado{
    #nombre;
    #dni;
    #salario;

    constructor(nombre,dni,salario){
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
    }
    verBonificacion (bono){
        throw new Error("VerBonificaciones un metodo abstracto debe modificarlo");
    }
    _verBonificacion (bono){
        return this.#salario + bono
    }
}