import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgressBar } from './progress-bar.component';
import { Header } from './todo-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoList } from './todo-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBar,
    Header,
    TodoList
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent, ProgressBar, Header, TodoList]
})
export class AppModule { }
