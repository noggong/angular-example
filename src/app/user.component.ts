import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)" [value]="name">
    <!-- <input type="text" [(ngModel)]="name"> -->
    <p>Hello {{ name }} !</p>
    <p>I'm the user component</p>
    <app-user-detail></app-user-detail>
  `
})
export class UserComponent {
  @Input() name: string;
  @Output() nameChnaged = new EventEmitter<string>();

  // @Input() name;
  // @Output() nameChnaged = new EventEmitter();

  onUserInput(event) {
    this.name = event.target.value;
    this.nameChnaged.emit(event.target.value);
  }
}
