import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { MyUpperPipe } from './prodUpper.pipe';
import { AddValuePipe } from './addValue.pipe';
import { FilterPipe } from './filterText.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: 'product', component: ProductComponent},
            {path: 'product/:id', component: ProductDetailComponent},
        ])

    ],
    declarations: [
        ProductComponent,
        MyUpperPipe,
        AddValuePipe,
        FilterPipe,
        ProductDetailComponent
    ],
    providers: [
        ProductService
    ]
})

export class ProductModule {

}
