import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notfound.component';
import { ProductModule } from './products/product.module';

@NgModule({
    // All modules will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'order', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent}
        ]),
        ProductModule
    ],

    // All Component & Pipe & router will declare here
    declarations: [
        AppComponent,
        OrderComponent,
        HomeComponent,
        NotFoundComponent
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
