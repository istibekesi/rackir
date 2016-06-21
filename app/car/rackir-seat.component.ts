import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: '[rackir-car-seat]',
    providers: [],
    template: `
    
    <svg:g>
        <svg:defs>
            <svg:pattern id="avatar" patternUnits="userSpaceOnUse" width="100" height="100">
                <svg:image [attr.xlink:href]="avatarSrc" x="0" y="0" width="100" height="100" />
            </svg:pattern>
        </svg:defs>
        
        <svg:rect [attr.x]="attrX" [attr.y]="attrY" rx="1" ry="1" width="25" height="25" class="seat" fill="url(#avatar)">
        </svg:rect>
        <svg:text [attr.x]="attrX" [attr.y]="attrY" fill="blue" > {{avatarSrc}} </svg:text>
    </svg:g>
    
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
    avatarSrc : string;

    constructor() {

    }

    ngOnInit() {
        this.avatarSrc = 'https://scontent-vie1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/13413244_1043651565710149_835427729_n.jpg';
    }

}