import {IUser} from './iuser';

export class User implements IUser {

    constructor (public userName : string,
                 public email : string,
                 public password : string,
                 public avatar : string
    ) {}

}