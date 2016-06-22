import {IUser} from './iuser';

export class User implements IUser {

    userName:string;
    email:string;
    password:string;
    avatar:string;

    constructor (public userName : string,
                 public email : string,
                 public password : string,
                 public avatar : string
    ) {}

}