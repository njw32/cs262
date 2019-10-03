import { Component, OnInit } from '@angular/core';
import {Todo} from '../Interfaces/todo'

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.page.html',
  styleUrls: ['./edit-todo.page.scss'],
})
export class EditTodoPage implements OnInit {

  private todo: Todo;


  constructor() {

    this.todo = {
      id: 0,
      title: '',
      description: ''

    };

    
  }

  ngOnInit() {
    // grab id from route
  }
  
  saveTodo(){

  }
}
