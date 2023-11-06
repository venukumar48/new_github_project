import { Component } from '@angular/core';
import { ToDoServiceService } from 'src/app/to-do-service.service';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent {

constructor(private todoservice:ToDoServiceService)
{

}

ngOnInit()
{
  console.log("add to ngNnti")
  
}

ADD(input:any)
{
 this.todoservice.Create({text:input});

}


}
