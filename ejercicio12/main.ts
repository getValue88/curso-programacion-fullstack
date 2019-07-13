/* 
    Armar una base de datos de libros
    Hacer el planteo de las clases necesaria
    Implementar la clase Libro
    Implementar la clase GestorLibros → debe soportar insertar/consultar/modificar/eliminar libros (la entrada de información por teclado)
    Luego incorporar en donde se crea necesario un mecanismo para leer libros desde un archivo de texto
*/

import txtToBookArr from './txtToBookArr'
import Library from './library'

let bookArr = new txtToBookArr('ejercicio12/data.txt', '\r\n', ',');
let db = bookArr.returnBookArr();

let library = new Library(db);


library.showBooks();

// console.log(library.searchByTitle()); //buscar por titulo 
// library.searchByTitle('u'); //actualizar por titulo
// library.searchByTitle('d'); //borrar por titulo
// library.addBook(); //agregar libro

library.showBooks();