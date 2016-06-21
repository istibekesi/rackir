import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: '[rackir-car-seat]',
    providers: [],
    template: `
    <svg:rect [attr.x]="attrX" [attr.y]="attrY" rx="1" ry="1" width="25" height="25" class="seat">
    </svg:rect>
  `,
    styles : [`
    .seat {
      fill:none;
      stroke: #2c3e50;
      stroke-width:2;
    }
    .seat:hover {
      box-shadow: 10px 10px 5px grey;
    }
  `],
    directives: []
})
export class RackirCarSeatComponent implements OnInit {
    @Input() attrX: number;
    @Input() attrY: number;

    index : number;

    constructor() {
    }

    ngOnInit() {
    }

}