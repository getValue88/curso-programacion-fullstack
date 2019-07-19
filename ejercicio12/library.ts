import * as fs from 'fs'
import Book from './book'
import * as rl from '../node_modules/readline-sync'

export default class Library {
    private db: Book[]

    public constructor(txtRoute: string, separatorRows: string, separatorColumns: string) {
        this.db = this.loadDb(txtRoute, separatorRows, separatorColumns)
    }

    public printBookList(): void {
        console.log("\n");
        for (let i = 0; i < this.db.length; i++) {
            console.log(`${i + 1}- Title: ${this.db[i].getTitle()}. Author: ${this.db[i].getAuthor()}. Year: ${this.db[i].getYear()}`);
        }
    }

    public getDb(): Book[]{
        return this.db;
    }

    public addBook(): void {
        let nB = this.newBook();
        this.db.push(nB);
    }

    // parametro opcional: 'd' = delete  //  'u' == update
    public searchByTitle(operation?: string): Book {
        if (operation == undefined) {
            operation = "";
        }

        let title: string = rl.question("\nTitle: ");
        let wasFound = false;
        for (let i = 0; i < this.db.length; i++) {
            if (title.toLowerCase() == this.db[i].getTitle().toLowerCase()) {
                wasFound = true;
                switch (operation) {
                    case "":
                        return this.db[i];
                    case 'd':
                        this.db.splice(i, 1);
                        break;
                    case 'u':
                        let nB = this.newBook();
                        this.db.splice(i, 1, nB);
                        break;
                }
            }
        }
        if (!wasFound) {
            console.log("\nLibro no encontrado.");
            return null;
        }
    }

    private newBook(): Book {
        let t: string = rl.question("\nTitle: ");
        let a: string = rl.question("Author: ");
        let y: number = rl.questionInt("Year: ");

        let newBook: Book = new Book(t, a, y);
        return newBook;
    }

    private loadDb(txtRoute, separatorRows, separatorColumns): Book[] {
        let txt: string[] = fs.readFileSync(txtRoute, 'utf8').split(separatorRows);
        let x: string[][] = new Array(txt.length);
        let bookArr: Book[] = new Array(txt.length);

        for (let i = 0; i < txt.length; i++) {
            x[i] = txt[i].split(separatorColumns);
            bookArr[i] = new Book(x[i][0], x[i][1], parseInt(x[i][2]));
        }
        return bookArr;
    }
}