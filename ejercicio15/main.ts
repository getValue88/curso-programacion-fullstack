/* 
    Implementar Registro Automotor visto anteriormente, pero agregando soporte de motos y camiones usando herencia
    Definir tarea NPM para compilar y correr los archivos necesarios.
    task : npm run ej15
*/

import RegistroAutomotor from './registro_automotor'

let registro = new RegistroAutomotor("ejercicio15/cars.txt", "\r\n", ",");

console.log(registro.getDb());

registro.addCar("camion", "Ford", "700", 1976, "Rojo", 8, 15000, "no");
registro.updateCar(3, "moto", "Motomel", "con parlantes", 2012, "azul");
registro.deleteCar(4);

// registro.getCarsList();

console.log(registro.getDb());


