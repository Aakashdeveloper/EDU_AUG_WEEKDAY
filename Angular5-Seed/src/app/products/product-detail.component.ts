import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { IProduct} from './product.model';
@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    id: number;
    name: string;
    description: string;
    image: string;
    detail: IProduct[];

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {
    }

    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];

        /*this._route
            .queryParams
            .subscribe((params) => {
                this.name = params['name'];
                this.description = params['desc'];
                this.image = params['img'];
            });*/

        this._productService.getProductDetails(this.id)
            .subscribe((data) => this.detail = data);
    }

    onBack(): void {
        this._router.navigate(['/product']);
    }
}
