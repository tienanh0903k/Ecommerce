import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { LoginComponent } from './auth/login/login.component';
import { UsersRoutingModule } from './users-routing.module';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { HomeLayoutComponent } from 'src/app/layout/user/home/home.layout.component';
import { PrimeNgModule } from 'src/app/shared/prime-ng/prime-ng.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from 'src/app/shared/store/users/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from 'src/app/shared/store/users/user.effect';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        UsersComponent,
        LoginComponent,
        HeaderComponent,
        HomeLayoutComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UsersRoutingModule,
        HttpClientModule,
        PrimeNgModule,

        // StoreModule.forRoot({
        //     users: userReducer,
        // }),
        // EffectsModule.forRoot([UserEffects]),
    ],
    providers: [],
    //  schemas: [
    //         CUSTOM_ELEMENTS_SCHEMA
    //     ],
})
export class UsersModule {}
