import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  
  myForm =this.formBuilder.group({
    fname: ['', Validators.minLength(2)],
    lname: ['', Validators.minLength(2)],
    sex: ['', Validators.minLength(2)],
    email: ['', Validators.minLength(2)],
    age: [0, Validators.minLength(2)],
    status: [0, Validators.minLength(2)],
    dept: ['', Validators.minLength(2)],
    salary: [0, Validators.minLength(2)],
    id_number: ['', Validators.minLength(2)],
    position: ['', Validators.minLength(2)],
    contract: ['', Validators.minLength(2)],
    start_date: ['', Validators.minLength(2)],
    cell_num: ['', Validators.minLength(2)],
    address: ['', Validators.minLength(2)],
    password: ['', Validators.minLength(5)],
    
  });
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.myForm
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.myForm.value);
  }
  
}

