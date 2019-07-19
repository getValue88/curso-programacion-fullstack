import Match from "./match";
import MatchBuilder from "./matchBuilder";

export default class FootBall extends Match {
    private referee: string

    public constructor(builder: MatchBuilder) {
        super(builder);
        this.referee = builder.getReferee();
    }

    public getReferee(): string {
        return this.referee;
    }

    public setReferee(referee: string): void {
        this.referee = referee;
    }
}