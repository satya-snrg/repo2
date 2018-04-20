import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { JokeComponent } from './joke-component';
import { AppComponent } from './app.component';
import { JokeFormComponent } from './joke-form-component';
import { JokeListComponent } from './joke-list-component';


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

