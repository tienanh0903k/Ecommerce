import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutModule } from 'src/app/layout/app.layout.module';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AppLayoutModule,
    RouterModule
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
