import Book from './book'
import * as rl from '../node_modules/readline-sync'

export default class Library {
    private db: Book[]

    constructor(db: Book[]) {
        this.db = db;
    }

    public showBooks(): void {
        console.log("\n");
        for (let i = 0; i < this.db.length; i++) {
            console.log(`${i + 1}- Title: ${this.db[i].getTitle()}. Author: ${this.db[i].getAuthor()}. Year: ${this.db[i].getYear()}`);
        }
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
                    case "d":
                        this.db.splice(i, 1);
                        break;
                    case 'u':
                        let nB = this.newBook();
                        this.db.splice(i, 1, nB);
                        break;
                }
            }
        }
        if (!wasFound)
            console.log("\nLibro no encontrado.");
        return null;
    }

    private newBook(): Book {
        let t: string = rl.question("\nTitle: ");
        let a: string = rl.question("Author: ");
        let y: number = rl.questionInt("Year: ");

        let newBook: Book = new Book(t, a, y);
        return newBook;
    }
}