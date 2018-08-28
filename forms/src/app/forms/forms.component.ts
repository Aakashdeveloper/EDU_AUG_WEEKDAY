import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { NgForm } from '@angular/forms';
import { FormPosterService } from '../services/form-poster.service';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html'
})

export class FormsComponent {
    languages = ['AngularJs', 'Python', 'ReactJs'];
    model = new Employee('John', 'Methew', 'a@a.com', '12345', 'Male', true, 'AngularJs');
    hasCodelangError = false;
    disableSubmit = false;

    constructor(private _formPosterService: FormPosterService) {}

    firstToUpper(value: string): void {
        if (value.length > 0) {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.model.firstName = value;
        }
    }

    validateCodeLang(event): void {
        if (this.model.codelang === 'default') {
            this.hasCodelangError = true;
            this.disableSubmit = true;
        } else {
            this.hasCodelangError = false;
            this.disableSubmit = false;
        }
    }

    submitForm(form: NgForm) {
        this._formPosterService.postEmployee(form.value)
            .subscribe(data => console.log('success', data));
    }
}


/*
ng-pristine  ng-untouched  ng-valid
ng-dirty     ng-touched    ng-invalid
*/
