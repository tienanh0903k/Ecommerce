import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class ProductDialogComponent implements OnInit {
    @Input() display: boolean = false; // Trạng thái hiển thị dialog
    @Input() header: string = 'Thêm sản phẩm';
    @Input() product: any = {};
    @Input() categories: { label: string; value: string }[] = []; // Danh sách loại sản phẩm

    @Output() dialogClosed = new EventEmitter<void>(); // Sự kiện khi đóng dialog
    @Output() productSaved = new EventEmitter<any>(); // Sự kiện khi lưu sản phẩm

    ngOnInit(): void {
        if (!this.product) {
            this.product = { name: '', price: 0, category: '' };
        }
    }

    // Đóng dialog
    closeDialog() {
        this.display = false;
        this.dialogClosed.emit();
    }

    // Lưu sản phẩm
    saveProduct() {
        if (
            !this.product.name ||
            !this.product.price ||
            !this.product.category
        ) {
            alert('Vui lòng nhập đầy đủ thông tin sản phẩm!');
            return;
        }

        this.productSaved.emit(this.product);
        this.display = false;
    }
}
