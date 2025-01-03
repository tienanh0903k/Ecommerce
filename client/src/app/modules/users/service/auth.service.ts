import { Injectable } from '@angular/core';
import { Observable, of, tap, throwError } from 'rxjs';
import { HttpClientService } from 'src/app/core/https/http.client';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClientService) {}

    getAllUsers(): Observable<any> {
        return this.http.get<any[]>('users').pipe(
            tap((users) => {
                localStorage.setItem('users', JSON.stringify(users));
            })
        );
    }

    login(username: string, password: string): Observable<any> {
        // Lấy danh sách người dùng từ Local Storage
        const users = localStorage.getItem('users');
        if (!users) {
            return throwError(() => new Error('User data not loaded.'));
        }

        const userList = JSON.parse(users);

        const user = userList.find(
            (u: any) => u.username === username && u.password === password
        );

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            return of({ success: true, user });
        } else {
            return throwError(() => new Error('Invalid username or password.'));
        }
    }

    getCurrentUser(): any {
        const currentUser = localStorage.getItem('currentUser');
        return currentUser ? JSON.parse(currentUser) : null;
    }

    isExistUser(): boolean {
        return !!localStorage.getItem('users');
    }

    logout(): void {
        localStorage.removeItem('currentUser');
    }
}
