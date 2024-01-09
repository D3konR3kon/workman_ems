import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, EmailValidator } from '@angular/forms';
import { EmployeesService } from 'src/app/shared/employees.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  
  submitted= false;
  success = "none"
  myForm:FormGroup
  minStartDate = new Date().toJSON().slice(0,10)
  is_Error!: boolean;
  
  constructor(private formBuilder: FormBuilder, private empService: EmployeesService) {
    this.myForm =this.formBuilder.group({
      fname: ['',[Validators.required ,Validators.minLength(2)]],
      lname: ['',[Validators.required, Validators.minLength(2)]],
      sex: ['',[Validators.required, Validators.minLength(2)]],
      email: ['',[Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.minLength(2)]],
      status: ["", [Validators.required, Validators.minLength(2)]],
      dept_id: [null,[Validators.required, Validators.minLength(2)]],
      salary: ['', [Validators.required, Validators.minLength(2)]],
      id_number: ['', [Validators.required, Validators.minLength(2)]],
      pos_id: [null,[Validators.required,  Validators.minLength(2)]],
      contract: ['',[Validators.required,  Validators.minLength(2)]],
      start_date: ['',[Validators.required, Validators.minLength(2)]],
      cell_number: ['',[ Validators.required, Validators.minLength(2)]],
      address: ['',[Validators.required, Validators.minLength(2)]],
      
    });
  }
  ngOnInit(): void {
    console.log(this.minStartDate)
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    
    const body = {}
    if(this.myForm.value.fname != ""){
      console.log(this.myForm.value)
      
      this.empService.create(this.myForm.value).subscribe({
        next: (data)=>{
          console.log(data)
          this.submitted = true
          setTimeout(()=>{
            this.submitted = false
          },4000)
        },
        error:(err)=>{
          this.is_Error = true;
        console.log("Error message goes like this:", err.error, err)
        setTimeout(()=>{
          this.is_Error = false
        },4000)
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
  
}

