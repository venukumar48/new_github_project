import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form1',
  templateUrl: './model-driven-form1.component.html',
  styleUrls: ['./model-driven-form1.component.css']
})
export class ModelDrivenForm1Component {
  registerForm:any;
  constructor(private formbuilder:FormBuilder){

  }


ngOnInit()
{
  //this.initializeFormGroup();
  this.initializeformbuilder();
}

initializeFormGroup(){
this.registerForm= new FormGroup({
  firstname :new FormControl('',[Validators.required]),
  Lastname: new FormControl('',[Validators.minLength(5)]),
  address : new FormGroup({ 
    
  street: new FormControl('',[Validators.required]),
  city: new FormControl('',[Validators.required]),
  pin: new FormControl('',[])
})
 


})

}
initializeformbuilder()
{
 this.registerForm= this.formbuilder.group({
    firstname :new FormControl('',{
      validators:[Validators.required,Validators.minLength(5)],
      updateOn:'blur'
    }),
    Lastname: new FormControl('',[Validators.minLength(5)]),
    address : new FormGroup({ 
      
    street: new FormControl('',[Validators.required]),
    city: new FormControl('hyd',[Validators.required]),
    pin: new FormControl('501505',[])
  })
   
  
  
  })
}

submitMyform(form:any)
{
console.log(form)
}








}
function submits() {
  throw new Error('Function not implemented.');
}

