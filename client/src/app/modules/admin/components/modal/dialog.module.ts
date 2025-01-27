import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule as PrimeDialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ProductDialogComponent } from './product/dialog.component';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

@NgModule({
    declarations: [ProductDialogComponent],
    imports: [
        CommonModule,
        FormsModule,
        PrimeDialogModule, // Import DialogModule của PrimeNG
        DropdownModule,
        InputTextModule,
        ButtonModule,
        PanelModule,
        TableModule
    ],
    exports: [ProductDialogComponent],
})
export class DialogsModule {}
