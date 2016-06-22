import {Component, OnInit, Input} from '@angular/core';
import {CarService} from './car.service';

@Component({
    selector: '[rackir-car-seat]',
    template: `
    
    <svg:g>
        <svg:defs>
            <svg:pattern [attr.id]="index" patternUnits="objectBoundingBox" width="25" height="25">
                <svg:image [attr.xlink:href]="avatarSrc" x="0" y="0" width="25" height="25" />
            </svg:pattern>
        </svg:defs>
        
        <svg:rect [attr.x]="attrX" [attr.y]="attrY" rx="1" ry="1" width="25" height="25" class="seat" [attr.fill]="getFillUrl()">
        </svg:rect>
    </svg:g>
    
  `,
    styles : [`
    .seat {
      stroke: #2c3e50;
      stroke-width:2;
    }
    .seat:hover {
      box-shadow: 10px 10px 5px grey;
    }
  `],
    directives: [],
    providers: []
})
export class RackirCarSeatComponent implements OnInit {
    @Input() attrX: number;
    @Input() attrY: number;

    avatarSrc : string;
    index : string;

    getFillUrl() : string {
        return 'url(#'+ this.index + ')';
    }

    constructor(private carService:CarService) {
        let avatar = this.carService.getRandomInstaAvatar();
        this.index = avatar.id;
        this.avatarSrc = avatar.src;
    }

    ngOnInit() {
    }

}