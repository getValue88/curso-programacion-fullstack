import Auto from "./auto";

export default class CarBuilder {
    private car: Auto

    public constructor(marca: string, modelo: string) {
        this.createCar(marca, modelo);
    }

    public buildDominio(value: string): CarBuilder {
        this.car.setDominio(value);
        return this;
    }

    public buildMarca(value: string): CarBuilder {
        this.car.setMarca(value);
        return this;
    }

    public buildModelo(value: string): CarBuilder {
        this.car.setModelo(value);
        return this;
    }

    public buildAño(value: number): CarBuilder {
        this.car.setAño(value);
        return this;
    }

    public buildColor(value: string): CarBuilder {
        this.car.setColor(value);
        return this;
    }

    public buildCombustible(value: string): CarBuilder {
        this.car.setCombustible(value);
        return this;
    }

    public buildMotor(value: number): CarBuilder {
        this.car.setMotor(value);
        return this;
    }

    public buildCajaCambios(value: string): CarBuilder {
        this.car.setCajaCambios(value);
        return this;
    }

    public buildIsFull(value: boolean): CarBuilder {
        this.car.setIsFull(value);
        return this;
    }

    public buildKilometraje(value: number): CarBuilder {
        this.car.setKilometraje(value);
        return this;
    }

    public getCar(): Auto {
        return this.car;
    }

    private createCar(marca: string, modelo: string): CarBuilder {
        this.car = new Auto(marca, modelo);
        return this;
    }
}