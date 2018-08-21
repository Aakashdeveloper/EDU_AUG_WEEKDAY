import { Injectable } from '@angular/core';         // For all method
import { IProduct } from './product.model';         // For all method
import { Http, Response } from '@angular/http';     // For all method
import { HttpClient } from '@angular/common/http';  // If using HttpClient
import { Observable } from 'rxjs/Observable';       // SKIP only if using promisse
import 'rxjs/add/operator/map';                     // For Angular 5
import { map } from 'rxjs/operators';               // Angular 6

@Injectable()

export class ProductService {

    private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

    constructor(private _http: Http,
                private _httpClient: HttpClient) {}

    private extractData(res: Response) {
        return res.json();
    }
    // Using HTTP Client
        getProducts(): Observable<IProduct[]> {
            return this._httpClient.get<IProduct[]>(this._productUrl);
        }


    // Angular 5 Observable HTTP

    /*
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
                   .map((data: Response) => data.json());  // deseralize data
    }
    */

    // Angular 6
    /*    getProducts(): Observable<IProduct[]> {
            return this._http.get(this._productUrl)
                .pipe(map(this.extractData));
        }
    */

    // Promise
    /*getProducts(): Promise<IProduct[]> {
            return this._http.get(this._productUrl)
                        .toPromise()
                        .then((data: Response) => data.json());
    }*/


}




/*
observable
function add(a,b){
    return a+b
}

var add = (a,b) => {return a+b}
*/
