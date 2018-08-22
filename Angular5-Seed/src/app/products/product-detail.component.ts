import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    id: number;

    constructor(private _route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];
    }
}
