import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
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

  obj_id:any
  emplist: Employee[] = []
success: string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined;
submitted: any;


  constructor(private empService: EmployeesService, private router: Router) {
    
   //this.getAll()
  }
  
  ngOnInit(): void {

     this.getAll()
     
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

  getid(event:any,id:any){
    this.obj_id = id
    console.log(this.obj_id, event, "Here")
  }
  deleteOne(event:any, emp_id:any){
    console.log(event,emp_id, this.obj_id)
      
      this.empService.removeOne(emp_id).subscribe({
      next: (results)=>{
        console.log(results)
        
        this.ngOnInit()
      },
      error: (err)=>{
        console.log("The following error occured!", err )
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
