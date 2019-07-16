import Auto from "./auto";

export default class Camion extends Auto {
    private capacidadCarga: number
    private camaraFrigrorifica: string

    constructor(marca: string, modelo: string, year: number, color: string, ruedas: number, capacidadCarga: number, camaraFrigorifica: string) {
        super(marca, modelo, year, color)

        this.ruedas = ruedas;
        this.capacidadCarga = capacidadCarga;
        this.camaraFrigrorifica = camaraFrigorifica;
    }

    public getCapacidadCarga(): number {
        return this.capacidadCarga;
    }

    public tieneCamara(): string {
        return this.camaraFrigrorifica;
    }
}