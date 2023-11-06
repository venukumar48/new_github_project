import { Component } from '@angular/core';
import { SendReceiveService } from 'src/app/send-receive.service';

@Component({
  selector: 'app-recivemessage',
  templateUrl: './recivemessage.component.html',
  styleUrls: ['./recivemessage.component.css']
})
export class RecivemessageComponent {

receivedmessage:any[]=[];
constructor(private service:SendReceiveService)
{

}
ngOnInit()
 {
  this.receivedmessages();
 //  console.log("recieved  meessage")
  
 }


 receivedmessages(){
 this.service.getMessage().subscribe((message)=>{
  console.log("message is",message)
  this.receivedmessage.push(message);
  console.log("recieved message is",this.receivedmessage,message)

})
 }

}
