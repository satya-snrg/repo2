import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  //02 Get User Input
  values = '';

  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
}
