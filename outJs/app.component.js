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
var header_component_1 = require('./header.component');
var footer_component_1 = require('./footer.component');
var rackir_car_component_1 = require('./car/rackir-car.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <rackir-header>Loading header...</rackir-header>\n        \n        \n        <div class=\"container\">\n          <div class=\"page-header\" id=\"banner\">\n          </div>\n          My First Angular 2 App\n          Hello {{1+1}}\n        </div>\n        \n        <div>\n            <rackir-car>Loading car...</rackir-car>\n        </div>\n        \n        <rackir-footer>Loading footer...</rackir-footer>\n    ",
            directives: [header_component_1.HeaderComponent, footer_component_1.FooterComponent, rackir_car_component_1.RackirCarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map