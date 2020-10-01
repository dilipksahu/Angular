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
  currentVal=""
  getValue(val){
    console.warn(val)
    this.currentVal = val
  }

  disabledBox = true
  enableBox(){
    this.disabledBox = false
  }
  show = "yes"
  color = "Red"
  array = ["Dilip","Akshay","Ahmed"]
  object = [
    {name:"Dilip",age:30,email:"dilip@gmail.com"},
    {name:"Akshay",age:27,email:"akshay@gmail.com"},
    {name:"Ahmed",age:28,email:"ahmed@gmail.com"}
  ]
}

