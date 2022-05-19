class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=[]
        this.mascotas=[]
    }
    getFullName(){
        return `Su nombre completo es: ${this.nombre} ${this.apellido} `
    }
    addMascota(name){
        this.mascotas.push(name)
    }
    mostrarMascotas(){
        return this.mascotas
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(titulo,autor){
        this.libros.push({titulo: titulo, autor: autor})
    }
    getBookNames(){
        const titulos = []
        this.libros.forEach((libro)=>{
            titulos.push(libro.titulo)
        })
        return titulos
    }
}
const marce = new Usuario("Marcelo","Salas")
marce.addMascota("Milo");
marce.addMascota("Oliver");
marce.addBook("Codigo Enigma", "Dan Brown");
marce.addBook("Origen", "Dan Brown");
console.log(marce.getFullName());
console.log(marce.countMascotas());
console.log(marce.mostrarMascotas());
console.log(marce.getBookNames())
console.log(marce)
