import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {BooksPageComponent} from './books-page/books-page.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {RouterModule, Routes} from '@angular/router';
import {BooksListComponent} from './books-page/books-list/books-list.component';
import {BookDescriptionComponent} from './books-page/book-description/book-description.component';
import {BooksService} from './books.service';
import {HttpClientModule} from '@angular/common/http';
import {AdminBooksComponent} from './admin-page/admin-books/admin-books.component';
import {AdminBooksListComponent} from './admin-page/admin-books-list/admin-books-list.component';
import {AdminBookFormComponent} from './admin-page/admin-book-form/admin-book-form.component';
import {FormsModule} from '@angular/forms';
import { AuthComponent } from './admin-page/auth/auth.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import { LogoutComponent } from './admin-page/logout/logout.component';

const appRoutes: Routes = [
    {path: '', component: AboutPageComponent},
    {path: 'books', component: BooksPageComponent},
    {path: 'books/:id', component: BookDescriptionComponent},
    {path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard]},
    {path: 'admin/auth', component: AuthComponent},
    {path: 'admin/logout', component: LogoutComponent},
    {path: 'admin/books', component: AdminBooksComponent},
    {path: 'admin/books/create', component: AdminBookFormComponent},
    {path: 'admin/books/:id/edit', component: AdminBookFormComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        AboutPageComponent,
        BooksPageComponent,
        AdminPageComponent,
        BooksListComponent,
        BookDescriptionComponent,
        AdminBooksComponent,
        AdminBooksListComponent,
        AdminBookFormComponent,
        AuthComponent,
        LogoutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [BooksService, AuthService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
