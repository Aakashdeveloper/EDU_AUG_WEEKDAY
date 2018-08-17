import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { DashComponent } from './dash.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/prodUpper.pipe';
import { AddValuePipe } from './products/addValue.pipe';
import { FilterPipe } from './products/filterText.pipe';

@NgModule({
    // All modules will declare here
    imports: [
        BrowserModule,
        FormsModule
    ],

    // All Component & Pipe & router will declare here
    declarations: [
        AppComponent,
        DashboardComponent,
        DashComponent,
        ProductComponent,
        MyUpperPipe,
        AddValuePipe,
        FilterPipe
    ],

    // Main Component only in main module
    bootstrap: [
        AppComponent
    ],

    // All Service declare here
    providers: []
})

export class AppModule {

}



/*
main=> Create AppModule || Create AppComponent =>
Declare component in AppModule ==> Use selectot of comoponent in index.html
*/
