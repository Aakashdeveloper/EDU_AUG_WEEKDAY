import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { Customer } from './customer';

@Component({
    selector: 'my-signup',
    templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit  {
    customerForm: FormGroup;

    customer: Customer = new Customer();

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.customerForm = this.fb.group({
            firstName: [''],
            lastName: [''],
            email: ['']
        });
    }
    populateData(): void {
        this.customerForm.patchValue({
            email: 'a@a.com'
        });
    }

    nameToUpper(): void {
        const fname = this.customerForm.get('firstName').value;
        this.customerForm.patchValue({
            firstName: fname.charAt(0).toUpperCase() + fname.slice(1)
        });
    }
    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }
 }


 /*ngOnInit(): void {
        this.customerForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl()
        });
    }

     populateData(): void {
        this.customerForm.setValue({
            firstName: 'John',
            lastName: 'Methaw',
            email: 'a@a.com'
        });
    }

*/
