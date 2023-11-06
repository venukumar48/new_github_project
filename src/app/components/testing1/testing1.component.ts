import { Component } from '@angular/core';

@Component({
  selector: 'app-testing1',
  templateUrl: './testing1.component.html',
  styleUrls: ['./testing1.component.css']
})
export class Testing1Component {


adddition(a:any,b:any)
{
  return a+b;
}
subtraction(a:any,b:any)
{
  return a-b;
}

}
