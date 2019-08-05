/* 
 Parte 1
    •Generar diagrama de clases empleando interfaces o clases abstractas 
    •Implementar sistema
Parte 2
    •El sistema tiene que ser capaz de persistir los datos → leer/escribir** archivos TXT
    •La idea es que no se pierdan los datos cuando termine la ejecución del programa
*/

import Db from "./db";

let db = new Db("ejercicio19/data.txt", "\r\n", ",");

// db.addVehicle(1,"Ford", "Focus");
// db.deleteVehicle(7);
// db.updateVehicle(1,2,"dodge","ram",2500);

console.log(db);
db.saveData("ejercicio19/data.txt");



