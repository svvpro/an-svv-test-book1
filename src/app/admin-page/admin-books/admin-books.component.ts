import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.css']
})
export class AdminBooksComponent implements OnInit {

    constructor(private router: Router, private location: Location) {
    }

    ngOnInit() {
    }

    goToBookForm(): void {
        this.router.navigate(['/admin', 'books', 'create']);
    }

    goBack(): void {
        this.location.back();
    }
}
