import {ICar} from './icar';
import {ISeat} from './iseat';
import {IUser} from '../../user/model/iuser';
import {IRide} from '../../ride/model/iride';

export class Car implements ICar {
    id      : number;
    brand   : string;
    seats   : Array<ISeat>;
    owner   : IUser;
    rides   : Array<IRide>;


    constructor() {
    }
}