import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-photos-details',
  templateUrl: './photos-details.component.html',
  styleUrls: ['./photos-details.component.css']
})
export class PhotosDetailsComponent {
  id:any;
  photos:any;
  constructor( private activateRoute:ActivatedRoute,private http:HttpClient)
  {

  }
  ngOnInit()
  {
//this.fetchPhotodetails();
this.fetchPhotosQuery();
  }

fetchPhotosQuery()
{
this.activateRoute.queryParams.subscribe((params)=>{
      console.log("query param",params)
})
}


 fetchPhotodetails()
 {
  this.activateRoute.params.subscribe((paramss)=>{
    this.id=+paramss['id'];
    this.http.get(`https://jsonplaceholder.typicode.com/photos/${this.id}`).subscribe((response)=>{
      console.log("photo details",response)
      this.photos=response;
    })
  })
 }

}
