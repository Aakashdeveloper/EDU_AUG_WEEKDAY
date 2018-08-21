import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { DashComponent } from './dash.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/prodUpper.pipe';
import { AddValuePipe } from './products/addValue.pipe';
import { FilterPipe } from './products/filterText.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';

@NgModule({
    // All modules will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule
    ],

    // All Component & Pipe & router will declare here
    declarations: [
        AppComponent,
        DashboardComponent,
        DashComponent,
        ProductComponent,
        MyUpperPipe,
        AddValuePipe,
        FilterPipe,
        StarComponent
    ],

    // Main Component only in main module
    bootstrap: [
        AppComponent
    ],

    // All Service declare here
    providers: [
        ProductService
    ]
})

export class AppModule {

}



/*
main=> Create AppModule || Create AppComponent =>
Declare component in AppModule ==> Use selectot of comoponent in index.html
*/
