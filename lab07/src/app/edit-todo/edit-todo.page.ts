import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Todo} from '../Interfaces/todo'
import {TodoService} from '../todo.service';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.page.html',
  styleUrls: ['./edit-todo.page.scss'],
})
export class EditTodoPage implements OnInit {

  private todo: Todo;
  private editMode: boolean = false;


  constructor(private route:ActivatedRoute, private todoService: TodoService, private navCtrl: NavController ) {

    this.todo = {
      id: this.todoService.todos.length,
      title: '',
      description: ''

    };

    
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    
    if(id != null){
      this.todoService.load().then(() =>{
        this.editMode = true;
        this.todo = this.todoService.getTodo(id);
      })
    }
  }
  
  saveTodo(){

    if (this.editMode){
      this.todoService.save();
    } else{
    this.todoService.addTodo(this.todo);
  }

  this.navCtrl.navigateBack('/home')
}
}
