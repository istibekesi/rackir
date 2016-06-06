import { Component } from '@angular/core';
import { HeaderComponent } from './header.component'
import { FooterComponent } from './footer.component'

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
        <rackir-footer>Loading footer...</rackir-footer>
    `,
    directives: [HeaderComponent, FooterComponent]
})
export class AppComponent { }