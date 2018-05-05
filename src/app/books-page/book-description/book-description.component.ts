import {Component, OnInit} from '@angular/core';
import {BooksService} from '../../books.service';
import {Book} from '../../book';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-book-description',
    templateUrl: './book-description.component.html',
    styleUrls: ['./book-description.component.css']
})
export class BookDescriptionComponent implements OnInit {

    book: Book;

    constructor(private bs: BooksService, private ar: ActivatedRoute, private location: Location) {
    }

    ngOnInit() {
        const id: string = this.ar.snapshot.params.id;
        this.bs.getBook(id).subscribe(book => this.book = book);
    }

    goBack(): void {
        this.location.back();
    }

}
