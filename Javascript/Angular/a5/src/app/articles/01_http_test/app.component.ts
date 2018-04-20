import {Component} from '@angular/core';
import {ConfigService} from './config.service';
import {Config} from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private configService: ConfigService) {
    this.showConfig();
  }

  config: Config;
  error:any;

  showConfig() {
    this.configService.getConfig()
      .subscribe(
        data => this.config = {
        heroesUrl: data['heroesUrl'],
        textfile: data['textfile']
      },
        error => this.error = error


      );
  }
}
