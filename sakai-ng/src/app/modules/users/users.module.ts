import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
    declarations: [UsersComponent, LoginComponent],
    imports: [
        CommonModule,
    ]
})
export class UsersModule {}
