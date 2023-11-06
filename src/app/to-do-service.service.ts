import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ToDoServiceService {

  constructor() { }
  initailTodo:any=[{
    id:1,
    text:'ToDo1',
    completed:false
  }]
private subject1= new BehaviorSubject('initailTodo');
readonly observable=  this.subject1.asObservable();

Todoarr:any=this.initailTodo;
private nextid=2;
Create(item:any)
{
  item.id=++this.nextid;
  this.Todoarr.push(item);
  this.subject1.next(Object.assign([],this.Todoarr));
  console.log(this.subject1);

}
remove(id:any)
{
  console.log("remove service is",id)
  this.Todoarr.forEach((todo: { id: any },index:any) => {
    if (todo.id === id) {
      this.Todoarr.splice(index, 1);
    }
    this.subject1.next(Object.assign([], this.Todoarr));
  });
}

toggle(id:any)
{
this.Todoarr=this.Todoarr.map((todo:any)=>{
if(todo.id === id){
   todo.completed=!todo.completed;
   return todo;
}
else
return todo;

});

this.subject1.next(this.Todoarr);


}
 


}
