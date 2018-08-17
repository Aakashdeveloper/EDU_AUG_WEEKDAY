import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product.model';

@Pipe({
    name: 'filterData'
})

export class FilterPipe implements PipeTransform {
    transform(value: IProduct[], filterBy: string): IProduct[] {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        return filterBy ? value.filter( (product: IProduct) =>
            product.productName.toLowerCase().indexOf(filterBy) !== -1) : value;
    }
}

/*
var ages = [32, 33, 16, 40];
ages.filter((a) => {return a>18})


*/

