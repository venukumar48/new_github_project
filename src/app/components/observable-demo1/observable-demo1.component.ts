import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, interval, map, mergeMap, of, zip } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  templateUrl: './observable-demo1.component.html',
  styleUrls: ['./observable-demo1.component.css']
})
export class ObservableDemo1Component implements OnInit {

 myobservable:any;
 observable:any;
constructor(private http: HttpClient)
{

}
  ngOnInit(): void {
    //this.fetchusers();
    //this.fetchPhotos();
   // this.intervaldemo();
   //this.zipdemo();
   //this.forkJoin();
   this.mergeMapDemo();
  }
 
 

fetchusers()
{
  this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe((res)=>{
    let response=res;
    console.log("response is ",response);
  })
}
fetchPhotos()
{
  this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe({
   next:(res)=>{console.log(res)},
   error:(err)=>{console.log(err)},
   complete:()=>{console.log("completed.....")}


  })
}
 
intervaldemo()
{
 let observable=interval(1000);
 observable.subscribe((response)=>{
  console.log('response is',response);
  this.myobservable=response;
 })
}



zipdemo()
{
  let publisher1=of(28,34,56);
  let publisher2=of('sanjay','anil','venu');
  let publisher3=of('address1','address2','address3');
   
  let observable1=zip(publisher1,publisher2,publisher3).pipe(map(([age,name,address])=>({age,name,address}))
  
  );
  observable1.subscribe((res)=>{console.log(res)})
}
forkJoin()
{

  let response1=this.http.get('https://jsonplaceholder.typicode.com/comments');
  let response2=this.http.get('https://jsonplaceholder.typicode.com/photos');

  let observable2= forkJoin([response1,response2]).subscribe((response)=>{
    console.log(response);
  })
 

}

mergeMapDemo()
{
let userpublisher=of(1,2,3);

userpublisher.pipe(mergeMap((user:any)=>{
const url=`https://jsonplaceholder.typicode.com/users/${user}`;
return this.http.get(url);
})).subscribe((response)=>{
  console.log('response is  ',response);
});

}





}
