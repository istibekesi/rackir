import {Component} from '@angular/core';
import {CarService} from "./car.service";


@Component({
    selector: 'tmp-random-comp',
    providers: [CarService],
    template: ` <div>RANDOM: {{r}}</div>`

})
export class TmpRandomComp {

    r : string;

    constructor(private carService : CarService) {
        this.r = carService.getRandomInstaAvatar();
    }
    
}
