import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/users/service/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    display: boolean = false;
    images: string[] = [];
    responsiveOptions: any[] = [];

    currentUser: any = null;
    value: string = '';

    userOptions: any[] = [];

    constructor(private authService: AuthService, private router: Router) {
        this.images = [
            'https://pos.nvncdn.com/14f951-12134/art/artCT/20230723_fv68YjfX.jpg',
            'https://wiki.tino.org/wp-content/uploads/2022/07/word-image-55365-2.png',
        ];
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 1,
                numScroll: 1,
            },
            {
                breakpoint: '768px',
                numVisible: 1,
                numScroll: 1,
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1,
            },
        ];
    }

    ngOnInit(): void {
        this.currentUser = this.authService.getCurrentUser();

        this.userOptions = [
            {
                label: 'Trang quản trị',
                icon: 'pi pi-cog',
                command: () => this.goToAdminPage(),
            },
            {
                label: 'Thông tin cá nhân',
                icon: 'pi pi-user',
                command: () => this.goToProfilePage(),
            },
            {
                label: 'Đăng xuất',
                icon: 'pi pi-sign-out',
                command: () => this.logout(),
            },
        ];
    }
    goToAdminPage() {
        this.router.navigate(['/admin']);
    }

    // Điều hướng đến Thông tin cá nhân
    goToProfilePage() {
        this.router.navigate(['/profile']);
    }

    onInputChanged(e: any): void {
        const value = e.target.value;
        console.log('Changed value:', value);
    }

    handleLoginSuccess(): void {
        this.currentUser = this.authService.getCurrentUser();
    }
    // openDialog() {
    //     this.display = true;
    // }

    toggleLogin() {
        this.display = !this.display;
    }

    logout() {
        this.authService.logout();
        this.currentUser = null;
    }
}
