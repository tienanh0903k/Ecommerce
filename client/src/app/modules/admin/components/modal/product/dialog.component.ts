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

  productDetails: any[] = [];
  detail: any = {};
  selectedFile: File | null = null;
  uploadedImageUrl: string | null = null;

  uploadProgress: number = 0;

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

  constructor(private uploadService: UploadService,
    private http: HttpClient
  ) {}

  closeDialog() {
    this.display = false;
    this.dialogClosed.emit();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

//   uploadImage() {
//     if (!this.selectedFile) {
//       alert('Vui lòng chọn file trước!');
//       return;
//     }

//     const fileName = this.selectedFile.name;
//     const fileType = this.selectedFile.type;
//     console.log(fileName, fileType);

//     this.uploadService.getPresignedUrl(fileName, fileType).subscribe({
//       next: (response) => {
//         const uploadUrl = response.url;

//         // Upload file đến S3
//         this.uploadService.uploadFileToS3(uploadUrl, this.selectedFile!).subscribe({
//           next: () => {
//             this.uploadedImageUrl = uploadUrl.split('?')[0]; // Lấy URL của ảnh đã tải lên
//             this.detail.image = this.uploadedImageUrl; // Gắn URL ảnh vào detail
//             console.log('Upload thành công:', this.uploadedImageUrl);
//           },
//           error: (err) => {
//             console.error('Upload thất bại:', err);
//           },
//         });
//       },
//       error: (err) => {
//         console.error('Lấy pre-signed URL thất bại:', err);
//       },
//     });
//   }
// uploadImage() {
//     if (!this.selectedFile) {
//       alert('Vui lòng chọn file!');
//       return;
//     }

//     const fileName = this.selectedFile.name;
//     const fileType = this.selectedFile.type;

//     // Gọi API backend để lấy Pre-Signed URL
//     this.http
//       .post<{ url: string }>('http://localhost:3000/api/s3url', { fileName, fileType })
//       .subscribe({
//         next: (response) => {
//           const presignedUrl = response.url;

//           // Tải file lên S3 bằng cách sử dụng Pre-Signed URL
//           this.http
//             .put(presignedUrl, this.selectedFile, {
//               headers: { 'Content-Type': fileType },
//             })
//             .subscribe({
//               next: () => {
//                 console.log('Upload thành công!');
//               },
//               error: (err) => {
//                 console.error('Upload thất bại:', err);
//               },
//             });
//         },
//         error: (err) => {
//           console.error('Lấy Pre-Signed URL thất bại:', err);
//         },
//       });
//   }

uploadImage() {
    if (!this.selectedFile) {
      alert('Vui lòng chọn file!');
      return;
    }

    this.uploadService.uploadFile(this.selectedFile).subscribe({
      next: (event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          // Tính toán % tiến trình tải lên
          this.uploadProgress = Math.round((100 * event.loaded) / event.total!);
        } else if (event instanceof HttpResponse) {
          // Xử lý kết quả khi tải lên thành công
          alert('Upload thành công!');
          console.log('Kết quả:', event.body);
        }
      },
      error: (err) => {
        console.error('Lỗi tải lên:', err);
        // alert('Tải lên thất bại!');
      },
    });
  }

  addDetail() {
    // if (!this.detail.color || !this.detail.size || !this.detail.image || !this.detail.stock) {
    //   alert('Vui lòng nhập đầy đủ chi tiết sản phẩm!');
    //   return;
    // }

    this.productDetails.push({ ...this.detail });
    this.detail = {}; // Reset chi tiết sản phẩm
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

    this.product.details = this.productDetails; // Gắn chi tiết vào sản phẩm
    console.log('----Product saved:', this.product);
    this.productSaved.emit(this.product); // Phát sự kiện lưu sản phẩm
    this.display = false;
  }
}
