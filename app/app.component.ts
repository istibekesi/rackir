import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { RackirCarComponent } from './car/rackir-car.component';

@Component({
    selector: 'my-app',
    template: `
        <rackir-header>Loading header...</rackir-header>
        
        
        <div class="container">
          <div class="page-header" id="banner">
          </div>
          My First Angular 2 App
          Hello {{1+1}}
        </div>
        
        <div>
            <rackir-car>Loading car...</rackir-car>
        </div>
        
        <rackir-footer>Loading footer...</rackir-footer>
    `,
    directives: [HeaderComponent, FooterComponent, RackirCarComponent]
})
export class AppComponent { }