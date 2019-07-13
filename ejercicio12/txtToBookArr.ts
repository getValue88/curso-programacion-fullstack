import * as fs from 'fs'
import Book from './book'

export default class txtToBookArr {
    private txtRoute: string
    private separatorRows: string
    private separatorColumns: string

    constructor(txtRout: string, separatorRows: string, separatorColumns: string) {
        this.txtRoute = txtRout;
        this.separatorRows = separatorRows;
        this.separatorColumns = separatorColumns;
    }

    public returnBookArr(): Book[] {
        let txt: string[] = fs.readFileSync(this.txtRoute, 'utf8').split(this.separatorRows);
        let x: string[][] = new Array(txt.length);
        let bookArr: Book[] = new Array(txt.length);

        for (let i = 0; i < txt.length; i++) {
            x[i] = txt[i].split(this.separatorColumns);
            bookArr[i] = new Book(x[i][0], x[i][1], parseInt(x[i][2]));
        }
        return bookArr;
    }
}