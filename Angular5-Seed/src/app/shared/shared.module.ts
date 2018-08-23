import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        StarComponent
    ],
    providers: [],
    exports: [
        FormsModule,
        CommonModule,
        StarComponent
    ]

})

export class SharedModule {

}
