import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HeaderComponent } from './header/header.component';
import { InsideTaskListComponent } from './task-list/inside-task-list/inside-task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    HeaderComponent,
    InsideTaskListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
