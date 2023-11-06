import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  title = 'geeksforgeeks_onchange';
  selected_fruit = '';
  



 Fruits=[{id:1,name:"apple"},{id:2,name:"mango"}]
  
  onChange(value: any) {
      this.selected_fruit = value.target.value;
      console.log("selected fruit is",this.selected_fruit)
 
  }  

  categories: string[] = ['Category A', 'Category B', 'Category C'];
  options: any[] = ['apple','ball','cat'];
  selectedCategory: string = '';
  selectedOption: string = '';

  













  // isOptionVisible(option: string): boolean {
  //   // Logic to determine whether an option should be visible based on the selected category.
  //   // You can modify this logic according to your data structure.
  //   if (this.selectedCategory === 'Category A') {
  //     option.substring('apple')
  //   } else if (this.selectedCategory === 'Category B') {
  //     return option.startsWith('ball');
  //   } else if (this.selectedCategory === 'Category C') {
  //     return option.startsWith('cat');
  //   } else {
  //     return false;
  //   }
  // }

}