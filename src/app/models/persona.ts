export class Persona {
    id !: number;
    nombre:String;
    edad:number;

    constructor(nombre:String,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
}
