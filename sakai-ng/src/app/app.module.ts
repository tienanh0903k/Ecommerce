import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
    LocationStrategy,
    PathLocationStrategy,
} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { HomeLayoutComponent } from './layout/home/home.layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersModule } from './modules/users/users.module';
@NgModule({
    declarations: [AppComponent, NotfoundComponent, HomeLayoutComponent],
    imports: [AppRoutingModule, AppLayoutModule, ReactiveFormsModule, UsersModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService,
        CustomerService,
        EventService,
        IconService,
        NodeService,
        PhotoService,
        ProductService,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
