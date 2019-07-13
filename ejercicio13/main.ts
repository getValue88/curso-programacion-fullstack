/* 
    Iniciar un proyecto NPM
    Elegir una librería en https://www.npmjs.com/ e incorporarla en el proyecto
    Modelar una clase con composiciones, que utilice dicha librería
    Definir tarea NPM para compilar y correr los archivos necesarios

    task : npm run ej13  --> Compila todos los archivos .ts y ejecuta main.js
*/

import Calc from './calc'

let calc1 = new Calc(5, 5);
calc1.getFormatedResult();

let calc2 = new Calc(2 * 8, -7 * 5);
calc2.getFormatedResult();

let calc3 = new Calc(2, -2);
calc3.getFormatedResult();



