import {Component, OnInit} from '@angular/core';
import {BooksService} from '../../books.service';
import {Book} from '../../book';

@Component({
    selector: 'app-books-list',
    templateUrl: './books-list.component.html',
    styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

    books: Book[];

    constructor(private bs: BooksService) {
    }

    ngOnInit() {
        this.bs.getBooksList().subscribe(books => this.books = books);
    }

}
