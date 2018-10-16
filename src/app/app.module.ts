import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgressBar } from './progress-bar.component';
import { Header } from './todo-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoList } from './todo-list.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

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
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, ProgressBar, Header, TodoList]
})
export class AppModule { }
