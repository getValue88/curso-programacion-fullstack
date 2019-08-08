/* 
    Extender clase Auto implementada anteriormente,
    para que soporte seis tipos de datos más → todos pasados en el constructor.
        -Investigar patrón builder.
*/

import CarBuilder from "./carBuilder";

try {
/* 
    -marca,modelo,dominio,color,combustible y cajaCambios deben ser string y no pueden ser vacíos
    -año debe ser un número entre 1960 y el año actual.
    -motor debe ser un número
    -isFull debe ser un booleano
    -kilometraje debe ser un numero entre 0 y 1.000.000
*/
    let builder: CarBuilder = new CarBuilder("Fiat", "Palio")
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

} catch (err) {
    console.log(`Error: ${err.message}`);
}