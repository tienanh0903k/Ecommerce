import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutModule } from 'src/app/layout/app.layout.module';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductComponent } from './product/product.component';
import { PrimeNgModule } from 'src/app/shared/prime-ng/prime-ng.module';
import { TableComponent } from './components/table/table.component';

@NgModule({
    declarations: [AdminComponent, ProductComponent, TableComponent],
    imports: [CommonModule, AppLayoutModule, RouterModule, PrimeNgModule],
    exports: [AdminComponent, TableComponent ]
})
export class AdminModule {}
