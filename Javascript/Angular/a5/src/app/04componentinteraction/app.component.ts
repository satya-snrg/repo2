import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 'hello world from parent <app-child [aval]="100"></app-child>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

@Component({
  selector: 'app-child',
  template: 'hello world from child {{aval}}',
  styleUrls: ['./app.component.css']
})
export class AppChildComponent {
   @Input() aval: any;
  title = 'app';
}
