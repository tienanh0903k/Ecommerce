import { NgModule } from '@angular/core';

// PrimeNG modules
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { Dialog, DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
    imports: [CommonModule, CarouselModule],
    exports: [
        MenubarModule,
        ToolbarModule,
        ButtonModule,
        InputTextModule,
        DropdownModule,
        TableModule,
        DialogModule,
        CarouselModule,
    ],
})
export class PrimeNgModule {}
