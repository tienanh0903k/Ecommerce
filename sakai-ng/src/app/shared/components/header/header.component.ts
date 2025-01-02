import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    display: boolean = false;
    images: string[] = [];
    responsiveOptions: any[] = [];



    constructor() {
        this.images = [
            'https://pos.nvncdn.com/14f951-12134/art/artCT/20230723_fv68YjfX.jpg',
            'https://wiki.tino.org/wp-content/uploads/2022/07/word-image-55365-2.png'
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

    // openDialog() {
    //     this.display = true;
    // }

    toggleLogin() {
        this.display = !this.display;
    }
}
