import { Component } from '@angular/core';
import {TodoService} from '../todo.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public todoService: TodoService){

  }

}
