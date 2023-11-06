import { Component } from '@angular/core';

@Component({
  selector: 'app-templatefrom1',
  templateUrl: './templatefrom1.component.html',
  styleUrls: ['./templatefrom1.component.css']
})
export class Templatefrom1Component {
 user={firstName:"venuss",email:"venu@gmail.com",phone:"97977979797979"}

  submitform(myform:any)
  {
  console.log("submited successfullyy",myform);
this.user=myform;
console.log("user is",this.user)

  }
  reset(myform:any)
  {
    console.log("something is going on")
    myform.resetForm(); 
;  }

  }
