import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClientService } from "src/app/core/https/http.client";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class HomeService implements OnInit {
    constructor(
        private http: HttpClientService,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        if (!this.authService.isExistUser) {
            this.authService.getAllUsers().subscribe({
                next: (response) => {
                    console.log(response);
                },
                error: (error) => {
                    console.log(error);
                }
            });
        }
    }

    getProduct(): Observable<any> {
        return this.http.get('products');
    }
}
