import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { LoginComponent } from './auth/login/login.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { UsersRoutingModule } from './users-routing.module';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { HomeLayoutComponent } from 'src/app/layout/home/home.layout.component';

@NgModule({
    declarations: [UsersComponent, LoginComponent, HeaderComponent, HomeLayoutComponent],
    imports: [CommonModule, DialogModule, ButtonModule, InputTextModule, UsersRoutingModule],
    // exports: [UsersComponent, LoginComponent, HeaderComponent],
})
export class UsersModule {}
