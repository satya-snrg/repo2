import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Component, NgModule, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  template: `
<joke-list></joke-list>
  `
})
export class AppComponent {
}
