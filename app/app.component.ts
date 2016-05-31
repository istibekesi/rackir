import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
        <h1>
            My First Angular 2 App
            Hello {{1+1}}
        </h1>
    `
})
export class AppComponent { }