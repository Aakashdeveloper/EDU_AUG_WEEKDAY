import { Component, OnChanges,
         Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onStar(): void {
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`);
    }
}




/*
life cycle hooks

constructor
ngOnChanges
ngOnInit
onDestroy

var mark = 80;
"my marks in maths is "+80

`My marks in maths is ${marks}`

function add(a,b){
    return a+b
}

var sum = add(3,4)
*/
