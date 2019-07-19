import Match from "./match";
import MatchBuilder from "./matchBuilder";

export default class Chess extends Match {
    private timer: number

    public constructor(builder: MatchBuilder) {
        super(builder);
        this.timer = builder.getTimer();
        this.televizationFree = false;
    }

    public getTimer(): number {
        return this.timer;
    }

    public setTimer(timer: number): void {
        this.timer = timer;
    }
}