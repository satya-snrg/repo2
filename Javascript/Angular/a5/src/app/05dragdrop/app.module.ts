 import { NgModule } from '@angular/core';
 import { FormsModule } from "@angular/forms";
 import { BrowserModule  } from '@angular/platform-browser';
 import { AppComponent } from './app.component';
 import { NguiSortableModule } from '@ngui/sortable';
 import { ParticlesModule } from 'angular-particle';
 
 @NgModule({
   imports: [BrowserModule, FormsModule, NguiSortableModule,ParticlesModule],
   declarations: [AppComponent],
   bootstrap: [ AppComponent ]
 })
 export class AppModule { }