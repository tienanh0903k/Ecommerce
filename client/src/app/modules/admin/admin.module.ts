import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutModule } from 'src/app/layout/app.layout.module';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductComponent } from './product/product.component';
import { PrimeNgModule } from 'src/app/shared/prime-ng/prime-ng.module';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { ProductDialogComponent } from './components/modal/product/dialog.component';
import { DialogsModule } from './components/modal/dialog.module';

@NgModule({
    declarations: [AdminComponent, ProductComponent, TableComponent],
    imports: [
        CommonModule,
        AppLayoutModule,
        RouterModule,
        PrimeNgModule,
        FormsModule,
        PanelModule,
        DialogsModule,
    ],
    exports: [AdminComponent, TableComponent],
})
export class AdminModule {}
