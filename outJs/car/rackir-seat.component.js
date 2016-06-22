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
var car_service_1 = require('./car.service');
var RackirCarSeatComponent = (function () {
    function RackirCarSeatComponent(carService) {
        this.carService = carService;
        var avatar = this.carService.getRandomInstaAvatar();
        this.index = avatar.id;
        this.avatarSrc = avatar.src;
    }
    RackirCarSeatComponent.prototype.getFillUrl = function () {
        return 'url(#' + this.index + ')';
    };
    RackirCarSeatComponent.prototype.ngOnInit = function () {
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
            template: "\n    \n    <svg:g>\n        <svg:defs>\n            <svg:pattern [attr.id]=\"index\" patternUnits=\"objectBoundingBox\" width=\"25\" height=\"25\">\n                <svg:image [attr.xlink:href]=\"avatarSrc\" x=\"0\" y=\"0\" width=\"25\" height=\"25\" />\n            </svg:pattern>\n        </svg:defs>\n        \n        <svg:rect [attr.x]=\"attrX\" [attr.y]=\"attrY\" rx=\"1\" ry=\"1\" width=\"25\" height=\"25\" class=\"seat\" [attr.fill]=\"getFillUrl()\">\n        </svg:rect>\n    </svg:g>\n    \n  ",
            styles: ["\n    .seat {\n      stroke: #2c3e50;\n      stroke-width:2;\n    }\n    .seat:hover {\n      box-shadow: 10px 10px 5px grey;\n    }\n  "],
            directives: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [car_service_1.CarService])
    ], RackirCarSeatComponent);
    return RackirCarSeatComponent;
}());
exports.RackirCarSeatComponent = RackirCarSeatComponent;
//# sourceMappingURL=rackir-seat.component.js.map