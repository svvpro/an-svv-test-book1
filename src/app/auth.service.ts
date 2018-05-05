import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {


    private isLogged: boolean | null = null;

    constructor(private http: HttpClient) {
    }

    login(credentials): Observable<boolean> {
        const data = JSON.stringify(credentials);
        const params = new HttpParams().set('action', 'login');
        console.log(data);
        return this.http.post('assets/php/auth.php', data, {params: params})
            .map((res: Response) => {
                this.isLogged = (res.status === 1);
                return this.isLogged;
            });
    }

    logout(): Observable<boolean> {
        const params = new HttpParams().set('action', 'logout');
        return this.http.get('assets/php/auth.php', {params: params})
            .map((res: Response) => {
                if (res.status === 1) {
                    this.isLogged = false;
                }
                return this.isLogged;
            });
    }

    chekIsLogged(): Observable<boolean> {
        if (this.isLogged === null) {
            const params = new HttpParams().set('action', 'check');
            return this.http.get('assets/php/auth.php', {params: params})
                .map((res: Response) => {
                    this.isLogged = (res.status === 1);
                    return this.isLogged;
                });
        } else {
            return Observable.of(this.isLogged);
        }
    }


}
