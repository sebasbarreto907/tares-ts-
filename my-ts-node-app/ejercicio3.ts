class Persona{
    nombre: string;
    edad:number;
    peso:number;
    altura:number;

    constructor ( nombre:string, edad:number, peso:number, altura:number){
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.altura = altura;
    }

    saltar(){
        console.log("Estoy saltando")
    }
    
    saludar(){
        console.log("Hola mi nombre es " + this.nombre)
}
}

const persona = new Persona("Sebastian", 20, 80, 1.80);
persona.saltar();
persona.saludar();

console.log(persona);
console.log(persona.nombre);