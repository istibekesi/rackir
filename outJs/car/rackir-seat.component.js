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
var RackirCarSeatComponent = (function () {
    function RackirCarSeatComponent() {
    }
    RackirCarSeatComponent.prototype.ngOnInit = function () {
        this.avatarSrc = 'https://scontent-vie1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/13413244_1043651565710149_835427729_n.jpg';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RackirCarSeatComponent.prototype, "attrX", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RackirCarSeatComponent.prototype, "attrY", void 0);
    RackirCarSeatComponent = __decorate([
        core_1.Component({
            selector: '[rackir-car-seat]',
            providers: [],
            template: "\n    \n    <svg:g>\n        <svg:defs>\n            <svg:pattern id=\"avatar\" patternUnits=\"userSpaceOnUse\" width=\"100\" height=\"100\">\n                <svg:image [attr.xlink:href]=\"avatarSrc\" x=\"0\" y=\"0\" width=\"100\" height=\"100\" />\n            </svg:pattern>\n        </svg:defs>\n        \n        <svg:rect [attr.x]=\"attrX\" [attr.y]=\"attrY\" rx=\"1\" ry=\"1\" width=\"25\" height=\"25\" class=\"seat\" fill=\"url(#avatar)\">\n        </svg:rect>\n        <svg:text [attr.x]=\"attrX\" [attr.y]=\"attrY\" fill=\"blue\" > {{avatarSrc}} </svg:text>\n    </svg:g>\n    \n  ",
            styles: ["\n    .seat {\n      fill:none;\n      stroke: #2c3e50;\n      stroke-width:2;\n    }\n    .seat:hover {\n      box-shadow: 10px 10px 5px grey;\n    }\n  "],
            directives: []
        }), 
        __metadata('design:paramtypes', [])
    ], RackirCarSeatComponent);
    return RackirCarSeatComponent;
}());
exports.RackirCarSeatComponent = RackirCarSeatComponent;
//# sourceMappingURL=rackir-seat.component.js.map