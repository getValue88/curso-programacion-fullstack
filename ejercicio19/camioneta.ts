import Vehiculo from "./vehiculo";

export default class Camioneta extends Vehiculo {
    private capacidadCarga: number;


    public constructor(marca: string, modelo: string, capacidadCarga: number) {
        super(marca, modelo);
        this.capacidadCarga = capacidadCarga;
        this.tipo = 2;
    }

    public acelerar(): void {
        this.velocidad += 5;
    }
    public frenar(): void {
        this.velocidad -= 5;
    }

    public getCapacidadCarga(): number {
        return this.capacidadCarga;
    }
}