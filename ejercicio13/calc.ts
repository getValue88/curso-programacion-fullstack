import Format from './format'

export default class Calc {
    private valueOne: number
    private valueTwo: number
    private result: number
    private format: Format

    constructor(valueOne: number, valueTwo: number) {
        this.valueOne = valueOne;
        this.valueTwo = valueTwo;
        this.result = valueOne + valueTwo;
        this.format = new Format(this.result);
    }

    public getFormatedResult(): void {
        console.log(`(${this.valueOne}) + (${this.valueTwo}) = ${this.format.getValue()}`);
    }

    public getResult(): number {
        return this.result;
    }
}