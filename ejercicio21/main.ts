/* 
    Extender clase Auto implementada anteriormente,
    para que soporte seis tipos de datos más → todos pasados en el constructor.
        -Investigar patrón builder.
*/

import CarBuilder from "./carBuilder";

let builder = new CarBuilder("Fiat","Palio")
.buildDominio("ASD123")
.buildAño(2006)
.buildCombustible("nafta")
.buildCajaCambios("secuencial")
.buildColor("rojo")
.buildIsFull(false)
.buildKilometraje(50000)
.buildMotor(1.5);

let auto = builder.getCar();

console.log(auto);