import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjectdemo',
  templateUrl: './subjectdemo.component.html',
  styleUrls: ['./subjectdemo.component.css']
})
export class SubjectdemoComponent {

constructor(private httpclient:HttpClient)
{

}

ngOnInit()
{
 //this.subjectdemo();
 //this.BehaviourSubject();
 //this.replaysubject();
 this.asyncSubjectdemo();
}

subjectdemo()
{

console.log("subject demo")

let car_publisher= new Subject();

car_publisher.next('TaTA');

car_publisher.subscribe((res)=>{
  console.log("subject response is..",res);
})
car_publisher.next("indica");

}

BehaviourSubject()
{
console.log("behaviour subject")

let airtel_publisher= new BehaviorSubject('recharge 100/day get one month');

airtel_publisher.next('200 recharge get two months');

airtel_publisher.subscribe((res)=>{
console.log("behviour subject res..",res)
})
airtel_publisher.subscribe((res)=>{
console.log("second airtel publisher resp is ",res)
})
airtel_publisher.next("300 recharge per month");

}

replaysubject()
{
 let publisher= new ReplaySubject();
 publisher.next("first publisher");

 publisher.next("firsttttttt publisher");
 publisher.subscribe((res)=>{
  console.log(res)
 })

 publisher.next("second publisher");
 
 publisher.next("third publisher");


}
 asyncSubjectdemo()
 {
  let car_publisher= new AsyncSubject();

car_publisher.next('TaTA');

 let subscriber1=car_publisher.subscribe((res)=>{
  console.log("subscriber1 response is..",res);
})
car_publisher.next("indica");
let subscriber2=car_publisher.subscribe((res)=>{
  console.log("subscriber 2 res is",res)
})
car_publisher.next("indica...........");

car_publisher.complete();
 }





}
