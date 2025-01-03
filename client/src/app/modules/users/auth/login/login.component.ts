import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    @Input() display: boolean = false; // Nhận trạng thái hiển thị từ parent === props vay do

    username: string = '';
    password: string = '';
    error: string = '';

    constructor(
        private authService: AuthService,
        private router: Router,
        private messageService: MessageService
    ) {}

    ngOngInit() {
        console.log('Login component initialized', this.error);
    }

    login(): void {
        this.authService.login(this.username, this.password).subscribe({
            next: (res) => {
                // this.router.navigate(['/home']);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Login Success',
                    detail: 'Login successfully.',
                });
                this.display = false;
            },
            error: (err) => {
                console.error('Login failed:', err);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Login Failed',
                    detail: err.message || 'Invalid username or password.',
                });
                this.error = err.message;
            },
        });
    }
}
