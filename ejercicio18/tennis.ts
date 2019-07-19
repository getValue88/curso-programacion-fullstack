import Match from "./match";
import MatchBuilder from "./matchBuilder";

export default class Tennis extends Match {
    private format: string
    private sets: number

    public constructor(builder: MatchBuilder) {
        super(builder);
        this.format = builder.getFormat();
        this.sets = builder.getSets();
    }

    public getFormat(): string {
        return this.format;
    }

    public setFormat(format: string): void {
        this.format = format;
    }

    public getSets(): number {
        return this.sets;
    }

    public setSets(sets: number): void {
        this.sets = sets;
    }
}