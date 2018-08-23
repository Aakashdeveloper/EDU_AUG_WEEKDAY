import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { DashComponent } from './dash.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/prodUpper.pipe';
import { AddValuePipe } from './products/addValue.pipe';
import { FilterPipe } from './products/filterText.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { OrderComponent } from './orders/order.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notfound.component';

@NgModule({
    // All modules will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'product', component: ProductComponent},
            {path: 'product/:id', component: ProductDetailComponent},
            {path: 'order', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent}
        ])
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
        StarComponent,
        OrderComponent,
        ProductDetailComponent,
        HomeComponent,
        NotFoundComponent
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
