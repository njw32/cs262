import { Injectable } from '@angular/core';
import { Todo } from '../app/Interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: Todo[] = [];


  constructor() {
    this.todos= [{
      id:123,
      title: 'Hola',
      description: 'test'
    }];
   }

  load(){

  }

  save(){

  }

  getTodo(id){

  }

  addTodo(todo){
    
  }
}
