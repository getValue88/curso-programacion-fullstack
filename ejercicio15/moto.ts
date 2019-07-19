import Vehiculo from './vehiculo'


export default class Moto extends Vehiculo {
    public constructor(dominio: string, titular: string, marca: string, modelo: string, año: number, color: string) {
        super(dominio, titular, marca, modelo, año, color)
    }

    public hacerWilly(): void {
        console.log("Moto colgada");
    }

    public tirarCortes(): void {
        console.log("pum pum pum pum");
    }
}