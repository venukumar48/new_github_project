import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit  {
name:string='venu';
products:any=[];

constructor(private http:HttpClient)
{
console.log("this is constructor");
}

ngOnInit()
{

this.http.get('https://fakestorecomapi./products/1').subscribe(response=>{
  console.log(response);
 this.products=response;
 console.log(this.products);
})

}
}
