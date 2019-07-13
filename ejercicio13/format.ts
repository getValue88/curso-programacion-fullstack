import * as colors from '../node_modules/colors'

export default class Format {
    private value: number;
    private format: string;

    constructor(value: number) {
        this.value = value;

        if (this.value > 0) {
            this.setPositive();
        } else if (this.value < 0) {
            this.setNegative();
        } else {
            this.setZero();
        }
    }

    private setNegative(): void {
        let str: string = this.value.toString();
        this.format = (colors.bgRed.white.bold(`${str}`));
    }
    private setPositive(): void {
        let str: string = this.value.toString();
        this.format = (colors.bgWhite.green.bold(`${str}`));
    }
    private setZero(): void {
        let str: string = this.value.toString();
        this.format = (colors.bgYellow.blue(`${str}`));
    }

    public getValue(): string {
        return (this.format);
    }
}