import Vehiculo from "./vehiculo";

export default class AutoDeportivo extends Vehiculo {

    public constructor(marca: string, modelo: string) {
        super(marca, modelo);
        this.tipo = 3;
    }

    public acelerar(): void {
        this.velocidad += 30;
    }
    public frenar(): void {
        this.velocidad -= 30;
    }
}