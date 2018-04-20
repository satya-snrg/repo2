import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { JokeComponent } from './app.component';
import { AppComponent } from './app.component';
import { JokeFormComponent } from './app.component';
import { JokeListComponent } from './app.component';


@NgModule({
  imports: [BrowserModule],
  declarations: [
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

