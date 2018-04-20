import { Component,
         ViewChild,
         AfterViewInit,
         ElementRef } from '@angular/core';

import { BaconDirective } from './bacon.directive'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  extraIngredient: string;

 @ViewChild('someInput') someInput: ElementRef;

  ngAfterViewInit() {
    this.someInput.nativeElement.value = "Anchovies! 🍕🍕";
  }
}