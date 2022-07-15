class usuario{
    constructor(nombre,apellido,libro,mascota){
        this.nombre=nombre
        this.apellido=apellido
        this.libro=libro         
        this.mascota=mascota
        this.nombre_libro=[]
        

    }
    
    getFullName() {
        console.log(`mi nombre es: ${this.nombre} y mi apellido es: ${this.apellido}  `)
    }
 

}



addMascota(mascotas){
    this.mascota.push(mascotas);
    console.log(this.mascota);
}


addBook(nombre,autor){
    this.libro.push(nombre,autor);   
    console.log(this.libro);
}

countMascota(){
   return(
    console.log('la cantidad de mascotas es:'${this.mascota.length});
   )
   
}


getBookNames(){
    this.libro.forEach(libro => {
        this.nombre_libro.push(libro.nombre)
    return(nombre_libro)
    
        
    });
}

let  usuario = new usuario('Laura', 'Bermudez',{"100 años de soledad","Gabo"},'gato')



usuario.getFullName();
usuario.addMascota("araña");
usuario.countMascota();
usuario.getBookNames();
usuario.addBook({nombre:"Libro1",autor:"autor1"});






