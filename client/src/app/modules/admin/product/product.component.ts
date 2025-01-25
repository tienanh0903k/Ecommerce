import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
    products: any[] = [];
    columns: { field: string; header: string }[] = [];

    ngOnInit() {
      this.columns = [
        { field: 'id', header: 'Product ID' },
        { field: 'name', header: 'Name' },
        { field: 'price', header: 'Price' },
        { field: 'category', header: 'Category' }
      ];

      this.products = [
        { id: 1, name: 'Laptop', price: 1500, category: 'Electronics' },
        { id: 2, name: 'Smartphone', price: 800, category: 'Electronics' },
        { id: 3, name: 'Shoes', price: 120, category: 'Fashion' },
        { id: 4, name: 'Watch', price: 200, category: 'Accessories' },
        { id: 5, name: 'Bag', price: 70, category: 'Fashion' }
      ];
    }
}
