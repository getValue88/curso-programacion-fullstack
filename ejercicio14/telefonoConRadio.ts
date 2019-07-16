/* 
    Implementar las clases y métodos que se muestran: http://prntscr.com/ofvx1o
    Agregar variables/métodos adicionales
    Implementar cada clase en un archivo diferente
*/

import Telefono from "./telefono";

class TelefonoConRadio extends Telefono {
    private frecuenciaActual: number

    constructor(frecuenciaActual) {
        super();
        this.frecuenciaActual = frecuenciaActual;
    }

    public verFrecuenciaActual():number{
        return this.frecuenciaActual;
    }

    public sintonizarRadio(sintonia:number):void{
        this.frecuenciaActual = sintonia;
    }
}