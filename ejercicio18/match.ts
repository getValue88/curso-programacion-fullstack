import MatchBuilder from './matchBuilder'

export default class Match {
    private player_teamOne: string
    private player_teamTwo: string
    private competition: string
    private place: string
    private startTime: string
    protected televizationFree: boolean

    public constructor(builder: MatchBuilder) {
        this.player_teamOne = builder.getPlayer_teamOne();
        this.player_teamTwo = builder.getPlayer_teamTwo();
        this.competition = builder.getCompetition();
        this.place = builder.getPlace();
        this.startTime = builder.getStartTime();
        this.televizationFree = true;
    }

    public getPlayer_teamOne(): string {
        return this.player_teamOne;
    }

    public setPlayer_teamOne(player_team: string): void {
        this.player_teamOne = player_team;
    }

    public getPlayer_teamTwo(): string {
        return this.player_teamTwo;
    }

    public setPlayer_teamTwo(player_team: string): void {
        this.player_teamTwo = player_team;
    }

    public getCompetition(): string {
        return this.competition;
    }

    public setCompetition(competition: string): void {
        this.competition = competition;
    }

    public getPlace(): string {
        return this.place;
    }

    public setPlace(place: string): void {
        this.place = place;
    }

    public getStartTime(): string {
        return this.startTime;
    }

    public setStartTime(startTime: string): void {
        this.startTime = startTime;
    }

    public televizationIsFree(): boolean {
        return this.televizationFree;
    }
}

