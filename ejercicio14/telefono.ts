/* 
    Implementar las clases y métodos que se muestran: http://prntscr.com/ofvx1o
    Agregar variables/métodos adicionales
    Implementar cada clase en un archivo diferente
*/

export default class Telefono {
    private estaPrendido: Boolean
    private bateriaActual: number

    public constructor() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
    }

    public mandarMensaje(): void {
        console.log("Enviando mensaje");
    }

    public hacerLlamada(): void {
        console.log("llamando");
    }

    public prenderApagar(): void {
        if (!this.estaPrendido) {
            this.estaPrendido = true;
        } else {
            this.estaPrendido = false;
        }
    }
}