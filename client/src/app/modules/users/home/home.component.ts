import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HomeService } from '../service/home.service';
import { LoginComponent } from '../auth/login/login.component';
import { AuthService } from '../service/auth.service';
import { IProduct } from 'src/app/shared/types/product.interface';

@Component({
    selector: 'app-home',
    // standalone: true,
    // imports: [NgFor, ButtonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    products: IProduct[] = [];

    constructor(
        private homeService: HomeService,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.homeService.getProduct().subscribe((products) => {
            console.log('Products from API:', products);
            this.products = products;
        });

        this.authService.getAllUsers().subscribe((users) => {
            console.log('Users from API:', users);
        });
    }
}
