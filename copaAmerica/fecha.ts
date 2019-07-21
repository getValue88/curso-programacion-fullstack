import Partido from './partido'

export default class Fecha {
    private partidos: Partido[] = []

    public constructor() {

    }
    public addPartido(partido: Partido): void {
        this.partidos.push(partido);
    }

    public showFecha(): void {
        for (let i = 0; i < this.partidos.length; i++) {
            console.log(this.partidos[i]);
        }
    }

    public simularFecha(): void {
        for (let i = 0; i < this.partidos.length; i++) {
            this.partidos[i].jugarPartidoGrupo();
        }
    }
}