import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoDashboardComponent } from './shared/components/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './shared/components/todo-dashboard/todo-form/todo-form.component';
import { TodoListComponent } from './shared/components/todo-dashboard/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
