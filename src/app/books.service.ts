import {Injectable} from '@angular/core';
import {Book} from './book';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class BooksService {

    constructor(private http: HttpClient) {
    }

    getBooksList(): Observable<Book[]> {
        return this.http.get<Book[]>('assets/php/getbooks.php')
            .pipe(
                catchError(this.handlerError)
            );
    }

    getBook(id: string): Observable<Book> {
        const params = new HttpParams().set('id', id);
        return this.http.get<Book>('assets/php/getbooks.php', {params: params})
            .pipe(
                catchError(this.handlerError)
            );
    }

    saveBook(book: Book) {
        const data = JSON.stringify(book);
        return this.http.post('assets/php/managebooks.php', data)
            .pipe(
                catchError(this.handlerError)
            );
    }

    deleteBook(id: number) {
        const data = JSON.stringify({id: id, method: 'delete'});
        return this.http.post('assets/php/managebooks.php', data)
            .pipe(
                catchError(this.handlerError)
            );
    }


    private handlerError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('Произошла ошибка : ', error.error.message);
        } else {
            console.error(`Бекенд вернул код ошибки: ${error.status}, ` +
                `Описание ошибки: ${error.error}`);
        }
        return new ErrorObservable('Произошла ошибка. Попробуйте позже!');
    }

}
