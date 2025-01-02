import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClientService } from "src/app/core/https/http.client";

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor(
        private http: HttpClientService
    ) {}

    getProduct(): Observable<any> {
        return this.http.get('products');
    }
}
