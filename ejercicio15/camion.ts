import Vehiculo from "./vehiculo";

export default class Camion extends Vehiculo {
    private peso: number

    public constructor(dominio: string, titular: string, marca: string, modelo: string, año: number, color: string, peso: number) {
        super(dominio, titular, marca, modelo, año, color);
        this.peso = peso;
    }

    public getPeso(): number {
        return this.peso;
    }

    public setPeso(peso: number): void {
        this.peso = peso;
    }
}