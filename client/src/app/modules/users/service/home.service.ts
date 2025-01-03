import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClientService } from "src/app/core/https/http.client";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class HomeService  {
    constructor(
        private http: HttpClientService,
    ) {}



    getProduct(): Observable<any> {
        return this.http.get('products');
    }
}
