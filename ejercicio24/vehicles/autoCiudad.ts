import Vehiculo from "./vehiculo";

export default class AutoCiudad extends Vehiculo {

    public constructor(marca: string, modelo: string) {
        super(marca, modelo);
        this.tipo = 1;
    }

    public acelerar(): void {
        this.velocidad += 10;
    }
    public frenar(): void {
        this.velocidad -= 10;
    }
}