import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <app-todo-header></app-todo-header>
  <br>
  <app-todo-list></app-todo-list>
  `
})
export class AppComponent {
  title = 'angular-course-boltinc';
}
