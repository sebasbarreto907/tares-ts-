abstract class Curso {
    titulo: string;
    instructor: string;
    duracion: number; // en horas

    constructor(titulo: string, instructor: string, duracion: number) {
        this.titulo = titulo;
        this.instructor = instructor;
        this.duracion = duracion;
    }

    mostrarCurso(): void {
        console.log(`Curso: ${this.titulo} - Instructor: ${this.instructor} - Duración: ${this.duracion}h`);
    }

    abstract obtenerAcceso(): string;
}

class CursoGratis extends Curso {
    obtenerAcceso(): string {
        return "Acceso gratuito: acceso limitado a contenidos básicos.";
    }
}

class CursoPago extends Curso {
    precio: number;

    constructor(titulo: string, instructor: string, duracion: number, precio: number) {
        super(titulo, instructor, duracion);
        this.precio = precio;
    }

    obtenerAcceso(): string {
        return `Acceso de pago: acceso completo al curso. Precio: $${this.precio.toFixed(2)}.`;
    }
}

class CursoPremium extends CursoPago {
    soportePersonalizado: boolean;

    constructor(titulo: string, instructor: string, duracion: number, precio: number, soportePersonalizado = true) {
        super(titulo, instructor, duracion, precio);
        this.soportePersonalizado = soportePersonalizado;
    }

    obtenerAcceso(): string {
        const soporte = this.soportePersonalizado ? 'incluye soporte personalizado' : 'sin soporte personalizado';
        return `Acceso premium: todo el contenido, mentorías y ${soporte}. Precio: $${this.precio.toFixed(2)}.`;
    }
}

// Ejemplo de uso
const cursos: Curso[] = [
    new CursoGratis('Introducción a TypeScript', 'Ana Pérez', 3),
    new CursoPago('Desarrollo Backend con Node.js', 'Luis Gómez', 20, 49.99),
    new CursoPremium('Arquitectura de Software', 'Carla Ruiz', 40, 199.99, true),
];

cursos.forEach(c => {
    c.mostrarCurso();
    console.log(c.obtenerAcceso());
    console.log('---');
});
