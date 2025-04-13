import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/shared/model/todo';
import { TodoService } from 'src/app/shared/services/todo.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoForm') todoForm !: NgForm
  constructor(
    private _todoService : TodoService,
    private _uuidService : UuidService
  ) { }

  ngOnInit(): void {

  }
  onTodoAdd(){
    if(this.todoForm.valid){
      let newTodo : Itodo = this.todoForm.value;
      newTodo.todoId = this._uuidService.generateUuid();
      this._todoService.createNewTodo(newTodo);
      this.todoForm.reset()      
    }
  }

}
