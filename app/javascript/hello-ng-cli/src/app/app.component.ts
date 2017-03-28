import {Component} from '@angular/core';

@Component({
    selector: 'app-hello-ng-cli',
    template: require('./app.component.html'),
    styles: [require('./app.component.scss')],
})
export class AppComponent {
    title = 'app works!';
}
