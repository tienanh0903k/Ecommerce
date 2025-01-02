import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [NgFor, ButtonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    products = [
        {
            id: 1,
            name: 'Product 1',
            price: 29.99,
            image: 'https://via.placeholder.com/150?text=Product+1',
        },
        {
            id: 2,
            name: 'Product 2',
            price: 49.99,
            image: 'https://via.placeholder.com/150?text=Product+2',
        },
        {
            id: 3,
            name: 'Product 3',
            price: 19.99,
            image: 'https://via.placeholder.com/150?text=Product+3',
        },
        {
            id: 4,
            name: 'Product 4',
            price: 19.99,
            image: 'https://via.placeholder.com/150?text=Product+3',
        },
    ];
    constructor() {
        console.log('Home Component initialized');
        console.log(this.products);

     }

    onInit() {
        console.log(this.products);
    }
}
