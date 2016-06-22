"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_1 = require('./model/user');
var UserHeaderComponent = (function () {
    function UserHeaderComponent() {
    }
    UserHeaderComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User("XY", "xy@z.h", "***", "https://instagram.fbud1-1.fna.fbcdn.net/t51.2885-15/e35/12918008_1962044680688116_1118873059_n.jpg");
        return undefined;
    };
    UserHeaderComponent = __decorate([
        core_1.Component({
            selector: 'user-header',
            template: "\n        <div class=\"well clearfix\">\n            <img [src]=\"user.avatar\" class=\"pull-right avatar-img\">\n            <div>Name : {{user.userName}}</div>\n            <div>Email : {{user.email}}</div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], UserHeaderComponent);
    return UserHeaderComponent;
}());
exports.UserHeaderComponent = UserHeaderComponent;
//# sourceMappingURL=user-header.component.js.map