import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/05dragdrop/app.module';


//import { AppModule } from './app/articles/01_http_test/app.module';
//import { AppModule } from './app/sharedata2/app.module';


//Forms
//import { AppModule } from './app/forms/userinput/app.module';
import { AppModule } from './app/forms/templatedriven/app.module';

import { environment } from './environments/environment';



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
