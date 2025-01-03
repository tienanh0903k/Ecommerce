import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClientService } from 'src/app/core/https/http.client';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClientService) {

    }

    getAllUsers(): Observable<any> {
        return this.http.get<any[]>('users').pipe(
            tap((users) => {
                localStorage.setItem('users', JSON.stringify(users));
            })
        );
    }

    isExistUser():boolean {
        return !!localStorage.getItem('users')
    }
}
