/* 
 Parte 1
    •Generar diagrama de clases empleando interfaces o clases abstractas 
    •Implementar sistema
Parte 2
    •El sistema tiene que ser capaz de persistir los datos → leer/escribir** archivos TXT
    •La idea es que no se pierdan los datos cuando termine la ejecución del programa
*/

import Db from "./db";

try {
    let db = new Db("ejercicio19/data.txt", "\r\n", ",");
    // let db = new Db("", "\r\n", ",");                    // <-- Error: La ruta de la base de datos debe ser un texto y no puede ser vacía.
    // let db = new Db("ejercicio19/data.txt", true, ",");  // <-- Error: El separador 1 debe ser texto.
    // db.addVehicle(4,"Ford", "Focus");                    // <-- Error: Tipo de vehiculo invalido. (1 = auto de calle, 2 = camioneta, 3 = auto deportivo.)
    // db.addVehicle(1,"", "Focus");                        // <-- Error: Marca debe ser un texto y no puede ser vacío.
    // db.addVehicle(1,"Ford", "");                         // <-- Error: Modelo debe ser un texto y no puede ser vacío.
    // db.addVehicle(2,"Ford", "F100",-1);                  // <-- Error: Capacidad de carga debe ser un valor numerico mayor a 0.
    // db.deleteVehicle(-1);                                // <-- Error: Eliminar vehiculo: indice inválido.
    // db.deleteVehicle(50);                                // <-- Error: Eliminar vehiculo: indice inválido.
    // db.updateVehicle(-1,2,"dodge","ram",2500);           // <-- Error: Actualizar vehiculo: indice inválido.
    // db.updateVehicle(50,2,"dodge","ram",2500);           // <-- Error: Actualizar vehiculo: indice inválido.
    // db.updateVehicle(1,2,"","ram",2500);                 // <-- Error: Marca debe ser un texto y no puede ser vacío.
    // db.saveData("");                                     // <-- Error: La ruta de la base de datos debe ser un texto y no puede ser vacía.

    console.log(db);
    db.saveData("ejercicio19/data.txt");

} catch (err) {
    console.log(`Error: ${err.message}`);
}



