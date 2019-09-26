import { Component } from '@angular/core';
import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Value1;
  Value2;
  Answer;
  
  addition(){
    this.Answer = parseInt(this.Value1) + parseInt(this.Value2)
  }
  subtraction(){
    this.Answer = parseInt(this.Value1) - parseInt(this.Value2)
  }
  multiplication(){
    this.Answer = parseInt(this.Value1) * parseInt(this.Value2)
  }
  division(){
    this.Answer = parseInt(this.Value1) / parseInt(this.Value2)
  }

}
