import { Injectable } from '@angular/core';
import { Itodo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoArray: Array<Itodo> = [
    {
      todoItem: 'Angular',
      todoId: '12',
    },
    {
      todoItem: 'JavaScript',
      todoId: '13',
    },
  ];

  constructor() {}

  createNewTodo(todo: Itodo) {
    this.todoArray.push(todo);
  }

  fetchAllTodos(): Array<Itodo> {
    return this.todoArray;
  }

  removeTodo(todo: Itodo) {
    let getIndex = this.todoArray.findIndex((f) => f.todoId === todo.todoId);
    this.todoArray.splice(getIndex, 1)
  }
}
