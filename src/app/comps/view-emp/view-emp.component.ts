import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, EmailValidator } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/shared/employees.service';
import { Employee } from 'src/app/shared/models/employee';
@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit { 
  submitted= false;
  success = "none"
  myForm!:FormGroup
  employee!:Employee
  startDate:any
  
  constructor(private formBuilder: FormBuilder, private empService: EmployeesService, private route: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.myForm =this.formBuilder.group({
      fname: ['',[Validators.required ,Validators.minLength(2)]],
      lname: ['',[Validators.required, Validators.minLength(2)]],
      sex: ['',[Validators.required, Validators.minLength(2)]],
      email: ['',[Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.minLength(2)]],
      status: ["", [Validators.required, Validators.minLength(2)]],
      dept_name: ['',[Validators.required, Validators.minLength(2)]],
      salary: ['', [Validators.required, Validators.minLength(2)]],
      id_number: ['', [Validators.required, Validators.minLength(2)]],
      position: ['',[Validators.required,  Validators.minLength(2)]],
      contract: ['',[Validators.required,  Validators.minLength(2)]],
      start_date: [null,[Validators.required]],
      cell_number: ['',[ Validators.required, Validators.minLength(2)]],
      address: ['',[Validators.required, Validators.minLength(2)]],
      
    });
    this.getEmp(this.route.snapshot.params['emp_id'])
   
    
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    
    const body = {}
    if(this.myForm.value.fname != ""){
      console.log(this.myForm.value)
      this.submitted = true
      this.empService.create(this.myForm.value).subscribe({
        next: (data)=>{
          console.log(data)
        },
        error:(err)=>{
          console.log(err.stack)
        }
      })
    }
    setTimeout(()=>{
      this.submitted = false
    },4000)
  }
  clearinputs(){
    this.myForm.reset()
  }
  getEmp(id:any){
    this.empService.getOne(id).subscribe({
      next:(data)=>{
        let date = data.employee.start_date
        this.employee=data.employee

        this.employee.start_date = date.slice(0,10)
        this.myForm.patchValue(this.employee)

        console.log(this.employee,date.slice(0,10))
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  updateEmp(){
    const emp_id = this.route.snapshot.params['emp_id']
    this.empService.update(emp_id, this.myForm.value).subscribe({
      next: (data)=>{
        console.log(data)
      },
      error: (err)=>{
        console.log("Error message goes like this:", err)
      }
    })
    this.submitted = true

    setTimeout(()=>{
      this.submitted = false
    },4000)

  }
}
