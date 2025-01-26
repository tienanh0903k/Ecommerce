import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  columns: { field: string; header: string }[] = [];
  categories: any[] = [];

  // Input data
  searchText: string = ''; // Giá trị tìm kiếm
  selectedCategory: string = ''; // Thể loại được chọn
  selectedTime: string = ''; // Thời gian được chọn



  dialogVisible: boolean = false; // Trạng thái hiển thị dialog
  dialogHeader: string = ''; // Tiêu đề dialog
  selectedProduct: any = {}; // Sản phẩm được chỉnh sửa hoặc thêm mới

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

    this.categories = [
        { label: 'Tất cả', value: '' },
        { label: 'Electronics', value: 'Electronics' },
        { label: 'Fashion', value: 'Fashion' },
        { label: 'Accessories', value: 'Accessories' }
      ];
  }

  onEdit(row: any) {
    console.log('Edit:', row);
  }

  onDelete(row: any) {
    console.log('Delete:', row);
  }

  handleSearch() {
    console.log('Search:', this.searchText);
  }

  submitSearch() {
    console.log('Search (on submit):', this.searchText, this.selectedCategory);
  }

  openDialog(row?: any) {
    if (row && row.id) {
      // Nếu có ID => Chỉnh sửa
      this.dialogHeader = 'Chỉnh sửa sản phẩm';
      this.selectedProduct = { ...row }; // Copy dữ liệu sản phẩm để chỉnh sửa
    } else {
      // Nếu không có ID => Thêm mới
      this.dialogHeader = 'Thêm sản phẩm mới';
      this.selectedProduct = { name: '', price: 0, category: '' }; // Sản phẩm rỗng
    }
    this.dialogVisible = true; // Hiển thị dialog
  }

  handleDialogClosed() {
    this.dialogVisible = false; // Đặt lại trạng thái dialog
    console.log('Dialog đã đóng');
  }
}
