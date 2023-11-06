import { Component } from '@angular/core';
import { ToDoServiceService } from 'src/app/to-do-service.service';

@Component({
  selector: 'app-to-do-list2',
  templateUrl: './to-do-list2.component.html',
  styleUrls: ['./to-do-list2.component.css']
})
export class ToDoList2Component {


  
Todo$:any='';


constructor(private service:ToDoServiceService)
{

}
ngOnInit()
{
  this.Todo$=this.service.observable;
}

DELETE(item:any)
{
  console.log("delete",item);
this.service.remove(item);
}
toggled(id:any)
{
  this.service.toggle(id);
}
 
}
