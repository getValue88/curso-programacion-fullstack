export default class Book {
    private title: string
    private author: string
    private year: number

    public constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getTitle(): string {
        return this.title;
    }

    public setAuthor(author: string): void {
        this.author = author;
    }

    public getAuthor(): string {
        return this.author;
    }

    public setYear(year: number): void {
        this.year = year;
    }

    public getYear(): number {
        return this.year;
    }
}