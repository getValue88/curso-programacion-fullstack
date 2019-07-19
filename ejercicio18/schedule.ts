import Match from "./match";

export default class Schedule {
    private matchs: Match[] = []

    public constructor() {

    }

    public getMatchs(): Match[] {
        return this.matchs;
    }

    public addMatch(match: Match): void {
        this.matchs.push(match);
    }

    public deleteMatch(index: number): void {
        this.matchs.splice(index - 1, 1);
    }

    public updateMatch(index: number, match: Match): void {
        this.matchs.splice(index - 1, 1, match);
    }

    public sortSchedule(): void {
        this.matchs.sort((a, b) => {
            return parseInt(a.getStartTime().substring(0, 2)) - parseInt(b.getStartTime().substring(0, 2));
        });
    }

}