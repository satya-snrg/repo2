import { Component, OnInit } from '@angular/core';
import { DataService } from "./data.service";

@Component({
  selector: 'app-parent',
  template: `
    {{message}}  <button (click)="newMessage()">Parent</button> <br>
  `,
  // styleUrls: ['./sibling.component.css']
})
export class ParentComponent implements OnInit {

  message:string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }


  newMessage() {
    this.data.changeMessage("Parent")
  }

}
