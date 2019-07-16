import Auto from './auto'


export default class Moto extends Auto {
    constructor(marca, modelo, year, color) {
        super(marca, modelo, year, color);

        this.ruedas = 2;
    }

    public hacerWilly(): void {
        console.log("Moto colgada");
    }

    public tirarCortes(): void {
        console.log("pum pum pum pum");
    }
}