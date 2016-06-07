import { Component, OnInit } from '@angular/core';
import {IUser} from './model/iuser';
import {User} from './model/user';
@Component({
    selector: 'user-header',
    template: `
        <div class="well clearfix">
            <img [src]="user.avatar" class="pull-right avatar-img">
            <div>Name : {{user.userName}}</div>
            <div>Email : {{user.email}}</div>
        </div>
    `
})
export class UserHeaderComponent implements OnInit {
    user : IUser;

    constructor () {
    }

    ngOnInit():any {
        this.user = new User("XY", "xy@z.h", "***", "https://instagram.fbud1-1.fna.fbcdn.net/t51.2885-15/e35/12918008_1962044680688116_1118873059_n.jpg");
        return undefined;
    }
}