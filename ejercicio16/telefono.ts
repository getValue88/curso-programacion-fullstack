/* 
    Implementar el diagrama: https://prnt.sc/ogybru
     -Puede que esté incompleto
     -Agregar lo que crean necesario
*/

export default class Telefono {
    private estaPrendido: boolean
    private bateriaActual: number
    protected linternaPrendida: boolean

    public constructor() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
        this.linternaPrendida = false;
    }

    public mandarMensaje(msg: string, numero: number): boolean {
        let enviado = false;
        if (numero % 1 == 0 && (numero.toString().length > 6 && numero.toString().length < 12))
            enviado = true;
        return enviado;
    }

    public hacerLlamada(): void {
        console.log("Llamando...");
    }

    public prenderApagar(): void {
        if (!this.estaPrendido) {
            this.estaPrendido = true;
        } else {
            this.estaPrendido = false;
        }
    }

    public isOn():boolean{
        return this.estaPrendido;
    }

    public getBateriaActual(): number {
        return this.bateriaActual;
    }

    public setBateriaActual(bateriaActual: number): void {
        this.bateriaActual = bateriaActual;
    }

    public prenderApagarLinterna(): void {
        if (!this.linternaPrendida) {
            this.linternaPrendida = true;
        } else {
            this.linternaPrendida = false;
        }
    }

    public linternaIsOn():boolean{
        return this.linternaPrendida;
    }
}