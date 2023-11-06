import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  photos:any={};
  isLoading:boolean=false;
  constructor(private http:HttpClient,private activateroute:ActivatedRoute)
  {

  }

  ngOnInit()
  {
   

    this.fetchphotosfromresolver();
  }

  url="https://jsonplaceholder.typicode.com/photos/";
fetchphotosfromresolver()
{
  console.log("photo ts");
  this.isLoading=true;
  
  //this.fetchPhotos();
  this.activateroute.data.subscribe((response:any)=>{
    this.isLoading=false;  
    this.photos=response.myphotos;
  })

}
 fetchPhotos()
 {
  this.isLoading=true;
  
  this.http.get(this.url).subscribe((response)=>{
    console.log("response is",response)
    this.isLoading=false;
    this.photos=response;
   

  })
 }


}
