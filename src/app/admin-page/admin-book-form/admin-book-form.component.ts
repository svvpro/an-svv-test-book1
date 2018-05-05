import {Component, OnInit} from '@angular/core';
import {BooksService} from '../../books.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../../book';

@Component({
    selector: 'app-admin-book-form',
    templateUrl: './admin-book-form.component.html',
    styleUrls: ['./admin-book-form.component.css']
})
export class AdminBookFormComponent implements OnInit {

    book: Book;

    constructor(private bs: BooksService, private ar: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        const id: string | null = this.ar.snapshot.params.id;
        if (id) {
            this.bs.getBook(id).subscribe(book => this.book = book);
        } else {
            this.book = new Book();
            this.book.id = 0;
        }
    }

    submitBook(): void {
        this.bs.saveBook(this.book).subscribe((res: Response) => {
            console.log(res);
            if (res.status === 1) {
                this.router.navigate(['/admin', 'books']);
            }
        });
    }

}
