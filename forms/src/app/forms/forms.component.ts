import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html'
})

export class FormsComponent {
    languages = ['AngularJs', 'Python', 'ReactJs'];
    model = new Employee('John', '', '', '', '', true, 'AngularJs');

    firstToUpper(value: string): void {
        if (value.length > 0) {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.model.firstName = value;
        }
    }
}


/*
ng-pristine  ng-untouched  ng-valid
ng-dirty     ng-touched    ng-invalid
*/
