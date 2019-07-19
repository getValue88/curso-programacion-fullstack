/* 
    Implementar Registro Automotor visto anteriormente, pero agregando soporte de motos y camiones usando herencia
    Definir tarea NPM para compilar y correr los archivos necesarios.
    task : npm run ej15
*/

import RegistroAutomotor from './registro_automotor'

let registro = new RegistroAutomotor("ejercicio15/cars.txt", "\r\n", ",");

console.log(registro.getDb());

registro.getVehicle('VBV147');

registro.addVehicle("camion","CDF963","Carlos Mora", "Ford", "700", 1976, "Rojo",undefined, 35000);
registro.addVehicle("auto","RTY789","Ruben Rivas", "Ford", "Falcon", 1970, "Verde", 4);
registro.updateVehicle("ASD123", "moto","UIO456","Roberto Rojas", "Motomel", "con parlantes", 2012, "azul");
registro.deleteVehicle("BSD456"); 

// registro.getCarsList();

console.log(registro.getDb());


