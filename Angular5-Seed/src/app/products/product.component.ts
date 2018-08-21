import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    // styles: ['thead{color:red}', 'h3{color:seagreen}']
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    title: String = '@@@@Product list@@@';
    showTable: Boolean = true;
    showImage: Boolean = false;
    filterText: String;
    imageWidth: Number = 180;
    products: IProduct[];

    constructor(private _productService: ProductService) {}

    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    // Observable

      ngOnInit(): void {
        this._productService.getProducts()
            .subscribe((data) => this.products = data);
      }

    // Promise
    /*ngOnInit(): void {
      this._productService.getProducts()
          .then((data) => this.products = data);
    }*/

    onDataRecive(message: string) {
        this.title = '@@@@Product list@@@ >>>> ' + message;
    }
}



/*

Data binding
one way
-- Data  {{ }}z
-- property [ ]
-- event    ( )
two way    [( )]

structural directive

var => value can override and redeclare
let => value can override but cannot redeclare
const => value cannot override & cannot redeclare

CLI

uppercase
lowercase
titlecase
currency
date
percentage

function add(a,b){
  return a+b
}

var add = (a,b) => { return a+b }

coding pattern in which class recvives the instnace of object
it needs from extranl source rather than creating itself

*/
