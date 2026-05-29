class Libro {
  constructor(
    public isbn: string,
    public titulo: string,
    public autor: string,
    public disponible: boolean = true,
  ) {}
}

class Usuario {
  constructor(public id: string, public nombre: string) {}
}

class Prestamo {
  public fechaDevolucion?: Date;

  constructor(
    public libro: Libro,
    public usuario: Usuario,
    public fechaPrestamo: Date = new Date(),
  ) {}
}

class Biblioteca {
  private libros: Libro[] = [];
  private usuarios: Usuario[] = [];
  private prestamos: Prestamo[] = [];

  agregarLibro(libro: Libro): void {
    const existe = this.libros.some((l) => l.isbn === libro.isbn);
    if (existe) {
      console.log(`El libro con ISBN ${libro.isbn} ya existe.`);
      return;
    }

    this.libros.push(libro);
    console.log(`Libro agregado: ${libro.titulo} (${libro.autor})`);
  }

  eliminarLibro(isbn: string): void {
    const indice = this.libros.findIndex((libro) => libro.isbn === isbn);
    if (indice === -1) {
      console.log(`No se encontró el libro con ISBN ${isbn}.`);
      return;
    }

    const libroEliminado = this.libros.splice(indice, 1)[0]!;
    console.log(`Libro eliminado: ${libroEliminado.titulo}`);
  }

  buscarLibro(query: string): Libro[] {
    const texto = query.trim().toLowerCase();
    return this.libros.filter(
      (libro) =>
        libro.titulo.toLowerCase().includes(texto) ||
        libro.autor.toLowerCase().includes(texto),
    );
  }

  listarLibros(): Libro[] {
    return [...this.libros];
  }

  registrarUsuario(usuario: Usuario): void {
    const existe = this.usuarios.some((u) => u.id === usuario.id);
    if (existe) {
      console.log(`El usuario con id ${usuario.id} ya existe.`);
      return;
    }

    this.usuarios.push(usuario);
    console.log(`Usuario registrado: ${usuario.nombre}`);
  }

  buscarUsuario(nombre: string): Usuario[] {
    const texto = nombre.trim().toLowerCase();
    return this.usuarios.filter((usuario) =>
      usuario.nombre.toLowerCase().includes(texto),
    );
  }

  listarUsuarios(): Usuario[] {
    return [...this.usuarios];
  }

  prestarLibro(isbn: string, nombreUsuario: string): void {
    const libro = this.libros.find((l) => l.isbn === isbn);
    if (!libro) {
      console.log(`No existe el libro con ISBN ${isbn}.`);
      return;
    }

    if (!libro.disponible) {
      console.log(`El libro '${libro.titulo}' ya está prestado.`);
      return;
    }

    const usuariosEncontrados = this.buscarUsuario(nombreUsuario);
    if (usuariosEncontrados.length === 0) {
      console.log(`No existe el usuario '${nombreUsuario}'.`);
      return;
    }

    const usuario = usuariosEncontrados[0]!;
    libro.disponible = false;
    const prestamo = new Prestamo(libro, usuario);
    this.prestamos.push(prestamo);

    console.log(
      `Préstamo registrado: ${usuario.nombre} -> ${libro.titulo} (${libro.autor})`,
    );
  }

  devolverLibro(isbn: string, nombreUsuario: string): void {
    const prestamo = this.prestamos.find(
      (p) =>
        p.libro.isbn === isbn &&
        p.usuario.nombre.toLowerCase() === nombreUsuario.toLowerCase() &&
        !p.fechaDevolucion,
    );

    if (!prestamo) {
      console.log(
        `No se encontró un préstamo activo para el libro con ISBN ${isbn} y el usuario ${nombreUsuario}.`,
      );
      return;
    }

    prestamo.fechaDevolucion = new Date();
    prestamo.libro.disponible = true;

    console.log(
      `Devolución registrada: ${prestamo.usuario.nombre} devolvió '${prestamo.libro.titulo}'.`,
    );
  }

  listarPrestamos(): Prestamo[] {
    return [...this.prestamos];
  }
}

function mostrarLibros(libros: Libro[]): void {
  console.log("\nLibros disponibles en la biblioteca:");
  libros.forEach((libro) => {
    console.log(
      `- ${libro.titulo} | Autor: ${libro.autor} | ISBN: ${libro.isbn} | Disponible: ${libro.disponible ? "Sí" : "No"}`,
    );
  });
}

function mostrarUsuarios(usuarios: Usuario[]): void {
  console.log("\nUsuarios registrados:");
  usuarios.forEach((usuario) => {
    console.log(`- ${usuario.nombre} (id: ${usuario.id})`);
  });
}

function mostrarPrestamos(prestamos: Prestamo[]): void {
  console.log("\nPréstamos realizados:");
  prestamos.forEach((prestamo) => {
    console.log(
      `- ${prestamo.usuario.nombre} prestó '${prestamo.libro.titulo}' el ${prestamo.fechaPrestamo.toLocaleDateString()}` +
        (prestamo.fechaDevolucion
          ? `, devuelto el ${prestamo.fechaDevolucion.toLocaleDateString()}`
          : ", aún no devuelto"),
    );
  });
}

function main(): void {
  const biblioteca = new Biblioteca();

  biblioteca.agregarLibro(new Libro("978-0132350884", "Clean Code", "Robert C. Martin"));
  biblioteca.agregarLibro(new Libro("978-0201616224", "The Pragmatic Programmer", "Andrew Hunt"));
  biblioteca.agregarLibro(new Libro("978-0131103627", "The C Programming Language", "Brian W. Kernighan"));
  biblioteca.agregarLibro(new Libro("978-1491950296", "Programming JavaScript Applications", "Eric Elliott"));
  biblioteca.agregarLibro(new Libro("978-0262033848", "Introduction to Algorithms", "Thomas H. Cormen"));

  biblioteca.registrarUsuario(new Usuario("U001", "María López"));
  biblioteca.registrarUsuario(new Usuario("U002", "Juan Pérez"));
  biblioteca.registrarUsuario(new Usuario("U003", "Ana García"));

  mostrarLibros(biblioteca.listarLibros());
  mostrarUsuarios(biblioteca.listarUsuarios());

  console.log("\nCaso 2: Préstamo de Clean Code a María López");
  biblioteca.prestarLibro("978-0132350884", "María López");
  mostrarLibros(biblioteca.listarLibros());

  console.log("\nCaso 3: Intentar prestar el mismo libro otra vez");
  biblioteca.prestarLibro("978-0132350884", "Juan Pérez");

  console.log("\nCaso 4: Devolver el libro");
  biblioteca.devolverLibro("978-0132350884", "María López");
  mostrarLibros(biblioteca.listarLibros());

  console.log("\nCaso 5: Listar préstamos");
  mostrarPrestamos(biblioteca.listarPrestamos());
}

main();
