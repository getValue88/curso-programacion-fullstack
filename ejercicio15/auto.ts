import Vehiculo from "./vehiculo";

export default class Auto extends Vehiculo {
    private puertas: number

    constructor(dominio: string, titular: string, marca: string, modelo: string, año: number, color: string, puertas: number) {
        super(dominio, titular, marca, modelo, año, color);
        this.puertas = puertas;
    }

    public getPuertas(): number {
        return this.puertas;
    }

    public setPuertas(puertas: number): void {
        this.puertas = puertas;
    }
}