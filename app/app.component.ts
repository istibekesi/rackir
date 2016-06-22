import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { RackirCarComponent } from './car/rackir-car.component';
import { CarService } from './car/car.service';

@Component({
    selector: 'my-app',
    template: `
        <rackir-header>Loading header...</rackir-header>
        
        <div class="container">
        
          <div class="page-header" id="banner"></div>
          
          <h2> My First Angular 2 App</h2>
        
          <div>
            <rackir-car>Loading car...</rackir-car>
          </div>
          
        </div>
        
        <rackir-footer>Loading footer...</rackir-footer>
        
        
    `,
    directives: [HeaderComponent, FooterComponent, RackirCarComponent],
    providers : [CarService]
})
export class AppComponent { }