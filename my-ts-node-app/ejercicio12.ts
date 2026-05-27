interface Animal {
  nombre: string;
  edad: number;
  comer(): void;
  hacerSonido(): void;
}

class Perro implements Animal {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  comer(): void {
    console.log(`${this.nombre} está comiendo croquetas.`);
  }

  hacerSonido(): void {
    console.log(`${this.nombre} dice: ¡Guau guau!`);
  }
}

class Gato implements Animal {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  comer(): void {
    console.log(`${this.nombre} está comiendo pescado.`);
  }

  hacerSonido(): void {
    console.log(`${this.nombre} dice: ¡Miau miau!`);
  }
}

class Leon implements Animal {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  comer(): void {
    console.log(`${this.nombre} está comiendo carne.`);
  }

  hacerSonido(): void {
    console.log(`${this.nombre} ruge: ¡Grrrr!`);
  }
}

class Elefante implements Animal {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  comer(): void {
    console.log(`${this.nombre} está comiendo hojas y frutos.`);
  }

  hacerSonido(): void {
    console.log(`${this.nombre} trompetea: ¡Prrrr!`);
  }
}

const animales: Animal[] = [
  new Perro('Rex', 4),
  new Gato('Luna', 2),
  new Leon('Simba', 5),
  new Elefante('Dumbo', 10),
];

function alimentarYEscuchar(animales: Animal[]): void {
  for (const animal of animales) {
    console.log('------------------------------');
    console.log(`Animal: ${animal.nombre} | Edad: ${animal.edad}`);
    animal.comer();
    animal.hacerSonido();
  }
}

alimentarYEscuchar(animales);
