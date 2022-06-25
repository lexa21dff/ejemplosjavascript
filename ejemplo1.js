class Libros {
    constructor (autor,nombre,numeropaginas){
        this.autor=autor
        this.nombre=nombre
        this.numeropaginas=numeropaginas
    }
    set nombrelibro(nombre1){
        
    }
    get mostrarlibro(){

    }
}


let libro1=new Libros ("gabriel garcia marquez", "cien años de solodad", "365")
console.log(libro1)
let libro2 = new Libros ("fawayne","no fue otra noche loca", "35")
console.log(libro2)
let libro3 = new Libros ("fawayne","no apto para menores", "36")
console.log(libro3)
