interface Curso {
  titulo: string;
  instructor: string;
  duracion: number;
  mostrarCurso(): void;
}

interface CursoConAcceso extends Curso {
  precio: number;
  obtenerAcceso(): string;
}

class CursoGratis implements CursoConAcceso {
  titulo: string;
  instructor: string;
  duracion: number;
  precio: number;

  constructor(titulo: string, instructor: string, duracion: number) {
    this.titulo = titulo;
    this.instructor = instructor;
    this.duracion = duracion;
    this.precio = 0;
  }

  mostrarCurso(): void {
    console.log(`Curso gratis: ${this.titulo}`);
    console.log(`Instructor: ${this.instructor}`);
    console.log(`Duración: ${this.duracion} horas`);
    console.log(`Precio: $${this.precio}`);
  }

  obtenerAcceso(): string {
    return 'Acceso básico: solo contenidos gratuitos y foro.';
  }
}

class CursoPago implements CursoConAcceso {
  titulo: string;
  instructor: string;
  duracion: number;
  precio: number;

  constructor(titulo: string, instructor: string, duracion: number, precio: number) {
    this.titulo = titulo;
    this.instructor = instructor;
    this.duracion = duracion;
    this.precio = precio;
  }

  mostrarCurso(): void {
    console.log(`Curso pago: ${this.titulo}`);
    console.log(`Instructor: ${this.instructor}`);
    console.log(`Duración: ${this.duracion} horas`);
    console.log(`Precio: $${this.precio}`);
  }

  obtenerAcceso(): string {
    return 'Acceso estándar: incluye lecciones y material descargable.';
  }
}

class CursoPremium implements CursoConAcceso {
  titulo: string;
  instructor: string;
  duracion: number;
  precio: number;

  constructor(titulo: string, instructor: string, duracion: number, precio: number) {
    this.titulo = titulo;
    this.instructor = instructor;
    this.duracion = duracion;
    this.precio = precio;
  }

  mostrarCurso(): void {
    console.log(`Curso premium: ${this.titulo}`);
    console.log(`Instructor: ${this.instructor}`);
    console.log(`Duración: ${this.duracion} horas`);
    console.log(`Precio: $${this.precio}`);
  }

  obtenerAcceso(): string {
    return 'Acceso premium: incluye mentoría, sesiones en vivo y certificación.';
  }
}

const cursos: CursoConAcceso[] = [
  new CursoGratis('Introducción a TypeScript', 'Laura Gómez', 4),
  new CursoPago('JavaScript desde Cero', 'Andrés Rojas', 12, 199),
  new CursoPremium('Desarrollo Web Profesional', 'Mariana López', 30, 499),
];

function mostrarCatalogo(cursos: CursoConAcceso[]): void {
  for (const curso of cursos) {
    curso.mostrarCurso();
    console.log(curso.obtenerAcceso());
    console.log('---');
  }
}

mostrarCatalogo(cursos);


