import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form2',
  templateUrl: './model-driven-form2.component.html',
  styleUrls: ['./model-driven-form2.component.css']
})
export class ModelDrivenForm2Component {
//   myform!:FormGroup;
//  constructor(private formbuilder:FormBuilder)
//  {

//  }
//  ngOnInit()
//  {
//   this.myform=this.formbuilder.group({
//   employees:this.formbuilder.array([]),
// }
// )
//  }

// employees():FormArray
// {
//  return this.myform.get('employees') as FormArray;
// } 

// newEmployee():FormGroup
// {
//   return this.formbuilder.group({
//     firstName:'',
//     LastName:'',
//     skills:this.formbuilder.array([])
//   })
// }

//  AddEmp()
//  {
// console.log("add employee",this.newEmployee)
// this.employees().push(this.newEmployee());
//  }

// empskills(empindex:number):FormArray
// {
// return this.employees().at(empindex).get('skills') as FormArray;
// console.log("skills method",empindex)
// }


//  newskillssss():FormGroup
//  {
//  return this.formbuilder.group({
//    skill:'java',
//    Exp:'3'

//  })
 
//  }

//  addEmployeeSkill(empindex:number)

//  {
//    this.empskills(empindex).push(this.newskillssss());
   

//  }

//  onSubmit()
//  {
//   console.log("submit form is",this.myform.value)
//  }


//  }



































































 empForm!: FormGroup;

 constructor(private fb: FormBuilder) {}

 ngOnInit() {
   this.empForm = this.fb.group({
     employees: this.fb.array([]),
   });
 }

 employees(): FormArray {
   return this.empForm.get('employees') as FormArray;
 }

 newEmployee(): FormGroup {
   return this.fb.group({
     firstName: '',
     lastName: '',
     skills: this.fb.array([]),
   });
 }

 addEmployee() {
   this.employees().push(this.newEmployee());
 }

 removeEmployee(empIndex: number) {
   this.employees().removeAt(empIndex);
 }

 employeeSkills(empIndex: number): FormArray {
   return this.employees().at(empIndex).get('skills') as FormArray;
 }

 newSkill(): FormGroup {
   return this.fb.group({
     skill: '',
     exp: '',
   });
 }

 addEmployeeSkill(empIndex: number) {
   this.employeeSkills(empIndex).push(this.newSkill());
 }

 removeEmployeeSkill(empIndex: number, skillIndex: number) {
   this.employeeSkills(empIndex).removeAt(skillIndex);
 }

 onSubmit() {
   console.log(this.empForm)
   console.log(this.empForm.value);
 }
}