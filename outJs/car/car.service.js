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
var CarService = (function () {
    function CarService() {
        this.instaArray = [
            { id: "fill_0", src: "https://scontent-vie1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/13413244_1043651565710149_835427729_n.jpg" },
            { id: "fill_1", src: "https://scontent-vie1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13402297_270210406702581_1449139749_n.jpg" },
            { id: "fill_2", src: "https://scontent-vie1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13398501_1008870309191337_1018620738_n.jpg" },
            { id: "fill_3", src: "https://scontent-vie1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13259568_243510826006314_1553548347_n.jpg" },
            { id: "fill_4", src: "https://scontent-vie1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13249805_872860182859674_384956343_n.jpg" },
            { id: "fill_5", src: "https://scontent-vie1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c1.0.1078.1078/13151230_1620141114973447_389653414_n.jpg" },
            { id: "fill_6", src: "https://scontent-vie1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12918008_1962044680688116_1118873059_n.jpg" }
        ];
    }
    CarService.prototype.getRandomInstaAvatar = function () {
        var rand = Math.floor((Math.random() * this.instaArray.length));
        console.log('Random ****' + rand);
        return this.instaArray[rand];
    };
    CarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CarService);
    return CarService;
}());
exports.CarService = CarService;
//# sourceMappingURL=car.service.js.map