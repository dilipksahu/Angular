import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Name = 'Dilip Sahu';
  first_name='Dilip';
  getName(){
    return this.Name
  }
  obj = {
    name:"Anil",
    age : 28,
  }
  arr = ["Dilip","Akshay","Ahmed"]

  a=20;
  b=40;

  siteUrl = window.location.href

  getFunction(name){
    alert(name)
  }

  myEvent(evt){
    console.warn(evt)
  }
}
