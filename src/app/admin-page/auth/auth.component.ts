import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    credentials = {login: 'admin', password: ''};

    constructor(private as: AuthService, private router: Router) {
    }

    ngOnInit() {
    }

    submitAuth(): void {
        console.log('submit auth');
        this.as.login(this.credentials).subscribe((flag: boolean) => {
            if (flag) {
                console.log(flag);
                this.router.navigate(['/admin']);
            }
        });
    }

}
