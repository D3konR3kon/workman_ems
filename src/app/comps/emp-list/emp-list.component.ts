import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/shared/employees.service';
import { Employee } from 'src/app/shared/models/employee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit{
  searchTerm:string=''
  sortedList: Employee[] = []; // New array for sorted list
  sortField!: keyof Employee; // Track the current sort field
  sortDirection: string = 'asc'; // Track the current sort direction

  // emplist: Employee[]=[
  //   {fname: "Mark", lname: "Otto", age: 23, sex: "male", email: "example@gmail.com", id: 123456789101, emp_id: 1,dept:"Finance",start_date: '2017-03-04', salary: 2000, status:"Active",contract:"Casual", position:"Junior Software Engineer", address:"5555 Joe Doe Str, NY 8000", perfomance: 0 },
  //   {fname: "John", lname: "Otto", age: 23, sex: "male", email: "example@gmail.com", id: 123456789101, emp_id: 2,dept:"IT",start_date: '2017-03-04', salary: 2000, status:"Active",contract:"Casual", position:"Junior Software Engineer", address:"5555 Joe Doe Str, NY 8000", perfomance: 0 },
  //   {fname: "Anthony", lname: "Otto", age: 23, sex: "male", email: "example@gmail.com", id: 123456789101, emp_id: 3,dept:"IT",start_date: '2017-03-04', salary: 2000, status:"Active",contract:"Casual", position:"Junior Software Engineer", address:"5555 Joe Doe Str, NY 8000", perfomance: 0 },
  //   {fname: "Greg", lname: "Johnson", age: 23, sex: "male", email: "example@gmail.com", id: 123456789101, emp_id: 4,dept:"IT",start_date: '2017-03-04', salary: 2000, status:"Active",contract:"Casual", position:"Junior Software Engineer", address:"5555 Joe Doe Str, NY 8000", perfomance: 0 },
    
  // ]
  emplist: Employee[] = []


  constructor(private empService: EmployeesService) {
    // Initialize your employee list here
    
   this.getAll()
  }
  
  ngOnInit(): void {

     //this.getAll()
     this.sortList()
  }

  getAll(){
    this.empService.getAll().subscribe({
      next: (data)=>{
        this.emplist = data
        console.log(data)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  sortBy(field: any) {
    if (this.sortField === field) {
      // Toggle sort direction if sorting the same field
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // Set the new sort field and default to ascending order
      this.sortField = field;
      console.log(this.sortField)
      this.sortDirection = 'asc';
    }
    
    this.sortList();
  }

  sortList() {
    // Use Angular's orderBy pipe for sorting
    this.sortedList = this.emplist.sort((a:any, b:any) => {
      const aValue = a[this.sortField];
      const bValue = b[this.sortField];
      console.log(aValue, bValue)

      // Customize this comparison based on the data types of your fields
      if (this.sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }
}
