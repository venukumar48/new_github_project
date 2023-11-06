import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendReceiveService {

  constructor(private HttpClient:HttpClient) {

   }

   
service_subject= new Subject();

sendMessage(message:any)
{
  this.service_subject.next({text:message}) 
  console.log("send message service is..",this.service_subject,message);
}
getMessage():Observable<any>
{
 return this.service_subject.asObservable();
}

}
