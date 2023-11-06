import { Component } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
users:any=[]
constructor(private userservice:UsersService)
{

}
ngOnInit()
{
  console.log("ngoninit")
  this.fetchUsers();
}



fetchUsers()
{
  console.log("fetch users is")
this.userservice.FetchAllusers().subscribe((response:any)=>{
console.log("response is",response);
this.users=response;
 })
}

addition(a:any,b:any)
{
  return a+b;
}

}
