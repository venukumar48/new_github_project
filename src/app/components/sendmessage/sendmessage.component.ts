import { Component } from '@angular/core';
import { SendReceiveService } from 'src/app/send-receive.service';

@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.css']
})
export class SendmessageComponent {
message:any='';
constructor(private service:SendReceiveService)
{

}

ngOnInit()
{


}
sendmessage(message:any)
{
  this.service.sendMessage(message);
  console.log("send message component is",message)
}

}
