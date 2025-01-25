import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data: any[] = []; // Dữ liệu cho bảng
  @Input() columns: { field: string; header: string }[] = []; // Định nghĩa cột
  @Input() paginator: boolean = false; // Có phân trang hay không
  @Input() rows: number = 10; // Số hàng mỗi trang
  @Input() sortField: string = ''; // Trường sắp xếp
  @Input() sortOrder: number = 1; // Thứ tự sắp xếp: 1 (ASC), -1 (DESC)
  @Output() edit = new EventEmitter<any>(); // Sự kiện chỉnh sửa
  @Output() delete = new EventEmitter<any>(); // Sự kiện xóa

  onEdit(row: any) {
    this.edit.emit(row);
  }

  onDelete(row: any) {
    this.delete.emit(row);
  }
}
