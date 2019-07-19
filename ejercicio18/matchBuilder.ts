import FootBall from "./football";
import Tennis from "./tennis";
import Chess from "./chess";

export default class MatchBuilder {
    private player_teamOne: string
    private player_teamTwo: string
    private competition: string
    private place: string
    private startTime: string
    private referee: string
    private format: string
    private sets: number
    private timer: number

    public constructor() {

    }

    public buildPlayer_TeamOne(value: string): MatchBuilder {
        this.player_teamOne = value;
        return this;
    }

    public getPlayer_teamOne(): string {
        return this.player_teamOne;
    }

    public buildPlayer_TeamTwo(value: string): MatchBuilder {
        this.player_teamTwo = value;
        return this;
    }

    public getPlayer_teamTwo(): string {
        return this.player_teamTwo;
    }

    public buildCompetition(value: string): MatchBuilder {
        this.competition = value;
        return this;
    }

    public getCompetition(): string {
        return this.competition;
    }

    public buildPlace(value: string): MatchBuilder {
        this.place = value;
        return this;
    }

    public getPlace(): string {
        return this.place;
    }

    public buildStartTime(value: string): MatchBuilder {
        this.startTime = value;
        return this;
    }

    public getStartTime(): string {
        return this.startTime;
    }

    public buildReferee(value: string): MatchBuilder {
        this.referee = value;
        return this;
    }

    public getReferee(): string {
        return this.referee;
    }

    public buildFormat(value: string): MatchBuilder {
        this.format = value;
        return this;
    }

    public getFormat(): string {
        return this.format;
    }

    public buildSets(value: number): MatchBuilder {
        this.sets = value;
        return this;
    }

    public getSets(): number {
        return this.sets;
    }

    public buildTimer(value: number): MatchBuilder {
        this.timer = value;
        return this;
    }

    public getTimer(): number {
        return this.timer;
    }

    public buildMatch(sport: string): FootBall | Tennis | Chess {
        switch (sport) {
            case "football": {
                return new FootBall(this);
            }
            case "tennis": {
                return new Tennis(this);
            }
            case "chess": {
                return new Chess(this);
            }
        }
    }
}