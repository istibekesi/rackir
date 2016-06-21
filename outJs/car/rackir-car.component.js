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
var rackir_seat_component_1 = require('./rackir-seat.component');
var RackirCarComponent = (function () {
    function RackirCarComponent() {
    }
    RackirCarComponent.prototype.ngOnInit = function () {
        this.name = "inited";
        this.seats = [0, 1, 2, 4, 5];
    };
    RackirCarComponent.prototype.rows = function () {
        if (this.seats.length < 3)
            return 1;
        if (this.seats.length < 6)
            return 2;
        var extraSeats = (this.seats.length - 5);
        return 2 + (1 + Math.floor((extraSeats - 1) / 2));
    };
    RackirCarComponent.prototype.yHeigth = function (min) {
        if (this.rows() < 3)
            return min;
        return (min + (this.rows() - 2) * 45);
    };
    RackirCarComponent.prototype.viewBox = function (min) {
        return '0 0 100 ' + this.yHeigth(min);
    };
    RackirCarComponent.prototype.seatX = function (i) {
        if (i == 0)
            return 18;
        if (i == 1)
            return 58;
        if (i == 2)
            return 7;
        if (i == 3)
            return 37;
        if (i == 4)
            return 67;
        if (i % 2 == 0)
            return 58;
        return 18;
    };
    RackirCarComponent.prototype.seatY = function (i) {
        if (i < 2)
            return 64;
        if (i < 5)
            return 109;
        var extraRow = 1 + Math.floor((i - 5) / 2);
        //console.log('extraRow for ' + i + ' ' + extraRow);
        return 109 + (extraRow * 45);
    };
    RackirCarComponent.prototype.addSeat = function () {
        this.seats.push(this.seats.length + 1);
    };
    RackirCarComponent.prototype.removeSeat = function () {
        this.seats.pop();
    };
    RackirCarComponent = __decorate([
        core_1.Component({
            selector: 'rackir-car',
            providers: [],
            template: "\n    <div class=\"well clearfix\">\n      \n      <div class=\"btn-group\">\n        <button (click)=\"removeSeat()\" type=\"button\" class=\"btn btn-success btn-xs\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n</button>\n        <button (click)=\"addSeat()\" type=\"button\" class=\"btn btn-success btn-xs\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n</button>\n      </div>\n      \n      <br/><br/>\n      \n      <div style=\"width:300px;border-style:solid;border-width:0px;\">\n      \n        <svg id=\"svg1\" height=\"100%\" width=\"100%\" [attr.viewBox]=\"viewBox(200)\" preserveAspectRatio=\"xMidYMin\">\n          <g>\n            <defs>\n            </defs>\n\n            <rect x=\"2\" y=\"2\" rx=\"3\" ry=\"3\" width=\"96\" [attr.height]=\"yHeigth(196)\" class=\"car-rect\"></rect>\n            <rect x=\"4\" y=\"44\" rx=\"3\" ry=\"3\" width=\"92\" [attr.height]=\"yHeigth(110)\" fill=\"white\"></rect>\n            \n            <g rackir-car-seat *ngFor=\"let s of seats; let i = index\" \n              [attrX]=\"seatX(i)\" [attrY]=\"seatY(i)\"></g>\n            \n            \n          </g>\n        </svg>\n\n    </div>\n  ",
            styles: ["\n    .car-rect {\n      fill: #2c3e50;\n    }\n  "],
            directives: [rackir_seat_component_1.RackirCarSeatComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], RackirCarComponent);
    return RackirCarComponent;
}());
exports.RackirCarComponent = RackirCarComponent;
//# sourceMappingURL=rackir-car.component.js.map