import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {


employees=[{
  id:1,name:"venu",sal:5000 
          },
  {id:2,name:"sabitha",sal:6500}      
        ]



deleteEmp(ind:number)
{
  const conf=confirm("are you sure,you want to delete")
  if(conf){
  this.employees.splice(ind,1);
  }
}

selectedEmployee:any={};

viewEmp(emp:any)
{
this.selectedEmployee=emp;
}

editemp(emp:any)
{
this.selectedEmployee=emp;
}

ADDEMP(id:any,name:any,sal:any)
{
  const emp={id,name,sal}
  console.log("emp is",emp,id,name,sal)

  this.employees.push(emp);
  console.log("employees",this.employees);
}

save()
{
  console.log("save ",this.selectedEmployee.id)
  const index = this.employees.findIndex((item) => item.id === this.selectedEmployee.id);
  if (index !== -1) {
    this.employees[index] = this.selectedEmployee;
  }

  // Clear the selectedItem object
  this.selectedEmployee = {};
}

}
