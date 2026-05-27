class empleado{
    nombre: string;
    salario: number;
    puesto: string;

    constructor ( nombre:string, salario:number, puesto:string){
        this.nombre = nombre;
        this.salario = salario;
        this.puesto = puesto;
    }

    trabajo(){
        console.log("Estoy trabajando")
    }
    saludo(){
        console.log("Hola soy empleado de Sebastian")
    }
}

const empleado1 = new empleado("Juan", 3000, "Programador");
empleado1.trabajo();
empleado1.saludo();
console.log(empleado1);
console.log(empleado1.nombre);

const empleado2= new empleado("María", 3000, "Diseñadora");
empleado2.trabajo();
empleado2.saludo();
console.log(empleado2);
console.log(empleado2.nombre);

const empleado3= new empleado("Carlos", 3000, "Gerente");
empleado3.trabajo();
empleado3.saludo();
console.log(empleado3);
console.log(empleado3.nombre);
