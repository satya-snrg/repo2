import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      Say {{childMessage}}
  `,
  // styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() childMessage: string;

  constructor() { }

}
