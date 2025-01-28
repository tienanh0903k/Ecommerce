import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UploadService } from 'src/app/shared/service/file-upload';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class ProductDialogComponent {
  @Input() display: boolean = false;
  @Input() header: string = '';
  @Input() product: any = {};
  @Input() categories: any[] = [];

  @Output() dialogClosed = new EventEmitter<void>();
  @Output() productSaved = new EventEmitter<any>();

  sizeQuantityList: { size: string; quantity: number }[] = [];
  productDetails: any[] = [];
  detail: any = {};
  selectedFile: File | null = null;
  uploadedImageUrl: string | null = null;

  uploadProgress: number = 0;
  size: string = '';
  quantity: number = 0;

  colorOptions = [
    { label: 'Đỏ', value: 'Red' },
    { label: 'Xanh', value: 'Blue' },
    { label: 'Đen', value: 'Black' },
    { label: 'Trắng', value: 'White' },
  ];

  sizeOptions = [
    { label: 'S', value: 'S' },
    { label: 'M', value: 'M' },
    { label: 'L', value: 'L' },
    { label: 'XL', value: 'XL' },
  ];

  constructor(private uploadService: UploadService, private http: HttpClient) {
    console.log(this.size);
  }

  closeDialog() {
    this.display = false;
    this.dialogClosed.emit();
  }

  handleSize() {
    console.log(this.size);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedImageUrl = e.target.result; // Gán blob URL cho uploadedImageUrl
      };
      reader.readAsDataURL(file); // Đọc file dưới dạng Data URL
    }
  }

  uploadImage() {
    if (!this.selectedFile) {
      alert('Vui lòng chọn file!');
      return;
    }

    this.uploadService.uploadFile(this.selectedFile).subscribe({
      next: (event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round((100 * event.loaded) / event.total!);
        } else if (event instanceof HttpResponse) {
          this.uploadedImageUrl = event.body.file.url; // Lấy URL từ API
          this.detail.image = this.uploadedImageUrl; // Gán URL ảnh vào chi tiết
          console.log('Upload thành công:', this.uploadedImageUrl);
        }
      },
      error: (err) => {
        console.error('Lỗi tải lên:', err);
        alert('Tải lên thất bại!');
      },
    });
  }

  addSizeQuantity() {
    console.log("----",this.size, this.quantity)//---- <empty string>

    const existingIndex = this.sizeQuantityList.findIndex((item) => item.size === this.size);
    if (existingIndex !== -1) {
      this.sizeQuantityList[existingIndex].quantity += this.quantity;
    } else {
      this.sizeQuantityList.push({ size: this.size, quantity: this.quantity });
    }

    this.size = '';
    this.quantity = 0;
  }

  removeSizeQuantity(index: number) {
    this.sizeQuantityList.splice(index, 1);
  }

  addDetail() {
    if (!this.detail.color || !this.detail.image || this.sizeQuantityList.length === 0) {
      alert('Vui lòng nhập đầy đủ thông tin chi tiết sản phẩm!');
      return;
    }

    this.detail.sizeQuantity = [...this.sizeQuantityList];
    this.productDetails.push({ ...this.detail });

    this.detail = {};
    this.sizeQuantityList = [];
    this.uploadedImageUrl = null; // Reset URL ảnh
  }

  deleteDetail(detail: any) {
    this.productDetails = this.productDetails.filter((d) => d !== detail);
  }

  saveProduct() {
    if (!this.product.name || !this.product.price || !this.product.category) {
      alert('Vui lòng nhập đầy đủ thông tin chung!');
      return;
    }

    if (this.productDetails.length === 0) {
      alert('Vui lòng thêm ít nhất một chi tiết sản phẩm!');
      return;
    }

    this.product.details = this.productDetails;
    console.log('Sản phẩm đã lưu:', this.product);
    this.productSaved.emit(this.product);
    this.display = false;
  }
}
