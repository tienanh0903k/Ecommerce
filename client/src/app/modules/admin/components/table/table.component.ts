import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss',
})
export class TableComponent {
    /**
     * props
     */
    @Input() data: any[] = []; // Mảng dữ liệu
    @Input() columns: { field: string; header: string }[] = []; // Định nghĩa cột
    @Input() paginator: boolean = false; // Có phân trang không
    @Input() rows: number = 5; // Số hàng mỗi trang
    @Input() sortField: string = ''; // Trường sắp xếp mặc định
    @Input() sortOrder: number = 1; // Thứ tự sắp xếp: 1 (ASC) hoặc -1 (DESC)
    @Input() scrollable: boolean = true; // Có cuộn hay không

    // data = [
    //     { id: 1, name: 'John', age: 25 },
    //     { id: 2, name: 'Jane', age: 30 },
    // ];
}
