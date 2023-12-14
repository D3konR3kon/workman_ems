import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  
  submitted= false;
  success = "none"
  myForm:FormGroup
  
  constructor(private formBuilder: FormBuilder) {
    this.myForm =this.formBuilder.group({
      fname: ['',[Validators.required ,Validators.minLength(2)]],
      lname: ['',[Validators.required, Validators.minLength(2)]],
      sex: ['',[Validators.required, Validators.minLength(2)]],
      email: ['',[Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.minLength(2)]],
      status: ["", [Validators.required, Validators.minLength(2)]],
      dept: ['',[Validators.required, Validators.minLength(2)]],
      salary: ['', [Validators.required, Validators.minLength(2)]],
      id_number: ['', [Validators.required, Validators.minLength(2)]],
      position: ['',[Validators.required,  Validators.minLength(2)]],
      contract: ['',[Validators.required,  Validators.minLength(2)]],
      start_date: ['',[Validators.required, Validators.minLength(2)]],
      cell_num: ['',[ Validators.required, Validators.minLength(2)]],
      address: ['',[Validators.required, Validators.minLength(2)]],
      password: ['',[Validators.required, Validators.minLength(5)]],
      
    });
  }
  ngOnInit(): void {
    
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    
    if(this.myForm.value.fname != ""){
      console.log(this.myForm.valid)
      this.submitted = true
    }
    setTimeout(()=>{
      this.submitted = false
    },4000)
  }
  clearinputs(){
    this.myForm.reset()
  }
  
}

