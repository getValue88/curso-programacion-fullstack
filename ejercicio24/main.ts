/* 
 Parte 1
    •Generar diagrama de clases empleando interfaces o clases abstractas 
    •Implementar sistema
Parte 2
    •El sistema tiene que ser capaz de persistir los datos → leer/escribir** archivos TXT
    •La idea es que no se pierdan los datos cuando termine la ejecución del programa
*/

import Db from "./db/db";

try {
    let db = new Db("ejercicio24/db/data.txt", "\r\n", ",");
    // let db = new Db("", "\r\n", ",");                    // <-- Error: Base de datos ruta incorrecta. On ejercicio24/db/db.ts, line 13
    // db.addVehicle(4,"Ford", "Focus");                    // <-- Error: Tipo incorrecto. On ejercicio24/db/db.ts, line 75
    // db.addVehicle(1,"", "Focus");                        // <-- Error: Marca incorrecta. On ejercicio24/db/db.ts, line 77
    // db.addVehicle(1,"Ford", "");                         // <-- Error: Modelo incorrecto. On ejercicio24/db/db.ts, line 79
    // db.addVehicle(2,"Ford", "F100",-1);                  // <-- Error: Capacidad de carga incorrecta. On ejercicio24/db/db.ts, line 81
    // db.deleteVehicle(-1);                                // <-- Error: Eliminar vehiculo: indice incorrecto. On ejercicio24/db/db.ts, line 28
    // db.deleteVehicle(50);                                // <-- Error: Eliminar vehiculo: indice incorrecto. On ejercicio24/db/db.ts, line 28
    // db.updateVehicle(-1,2,"dodge","ram",2500);           // <-- Error: Actualizar vehiculo: indice incorrecto. On ejercicio24/db/db.ts, line 35
    // db.updateVehicle(1,2,"","ram",2500);                 // <-- Error: Marca incorrecta. On ejercicio24/db/db.ts, line 77
    // db.saveData("");                                     // <-- Error: No se puede guardar, base de datos ruta incorrecta. On ejercicio24/db/db.ts, line 42

    console.log(db);
    db.saveData("ejercicio19/data.txt");

} catch (err) {
    console.log(`Error: ${err.name}. On ${err.file}, line ${err.line}`);
}



