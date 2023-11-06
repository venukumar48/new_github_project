import { Component, OnInit } from '@angular/core';
import * as product from './products.json';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  searchText:string='';
constructor()
{

}

ngOnInit(): void {
  
}
products=(product as any).default;
p:any;

hightolow()
{
  this.products.sort((p1: any, p2: any)=>
    p2.price - p1.price

  );
}
lowToHigh()
{
  this.products.sort((p1: any, p2: any)=>
    p1.price - p2.price

  );
}

}
