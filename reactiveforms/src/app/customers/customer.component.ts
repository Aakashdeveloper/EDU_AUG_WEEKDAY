import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder,
         Validators,
         ValidatorFn,
         AbstractControl} from '@angular/forms';

import { Customer } from './customer';

function ratingRange(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): {[key: string]: boolean} | null => {
        if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return{'range': true};
        }
        return null;
    };
}

function emailMatcher(c: AbstractControl) {
    const emailControl = c.get('email');
    const confrimControl = c.get('confrimEmail');
    if (emailControl.value === confrimControl.value) {
        return null;
    } else {
        return {'match': true};
    }
}
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
            firstName: ['', [Validators.required, Validators.minLength(5)]],
            lastName: ['', [Validators.required, Validators.maxLength(6)]],
            emailGroup: this.fb.group({
                email: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+@[a-zA-Z0-9]+')]],
                confrimEmail: ['', [Validators.required]],
            }, {validator: emailMatcher}),
            phone: [],
            notification : 'email',
            rating: ['', ratingRange(1, 8)]
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

    setNotfication(notifyVia: string): void {
        console.log(notifyVia);
        const phoneControl = this.customerForm.get('phone');
        if (notifyVia === 'phone') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }

        phoneControl.updateValueAndValidity();
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
