import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() display: boolean = false; // Nhận trạng thái hiển thị từ parent
}

// import { Component, TemplateRef, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
// //   standalone: true,
//   styleUrl: './login.component.scss'
// })
// export class LoginComponent {
//     display: boolean = false;
//     @ViewChild('template') template!: TemplateRef<any>;

//     constructor() { }

//     openDialog() {
//         this.display = true;
//     }

// }
