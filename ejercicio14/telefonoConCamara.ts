/* 
    Implementar las clases y métodos que se muestran: http://prntscr.com/ofvx1o
    Agregar variables/métodos adicionales
    Implementar cada clase en un archivo diferente
*/


import Telefono from "./telefono";

class TelefonoConCamara extends Telefono {
    public constructor() {
        super()
    }

    public sacarFoto():void {
        console.log("Sacando foto");
    }

    public grabarVideo():void{
        console.log("Grabando video");
    }
}