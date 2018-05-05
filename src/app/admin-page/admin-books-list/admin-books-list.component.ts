import {Component, OnInit} from '@angular/core';
import {BooksService} from '../../books.service';
import {Book} from '../../book';
import {Router} from '@angular/router';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
    selector: 'app-admin-books-list',
    templateUrl: './admin-books-list.component.html',
    styleUrls: ['./admin-books-list.component.css']
})
export class AdminBooksListComponent implements OnInit {

    books: Book[];

    constructor(private bs: BooksService, private router: Router) {
    }

    ngOnInit() {
        this.bs.getBooksList().subscribe(books => this.books = books);
    }

    deleteBook(id): void {
        this.bs.deleteBook(id).subscribe((res) => {
            if (res.status === 1) {
                this.books = this.books.filter(book => book.id !== id);
            }
        });
    }


}
