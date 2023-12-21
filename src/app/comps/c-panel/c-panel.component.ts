import { Component, OnInit } from '@angular/core';
import { EmpListComponent } from '../emp-list/emp-list.component';
import { Top10Component } from '../top10/top10.component';
import { AboutComponent } from '../about/about.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-c-panel',
  templateUrl: './c-panel.component.html',
  styleUrls: ['./c-panel.component.css']
})
export class CPanelComponent implements OnInit {
 

  selectedComponent:any

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.selectedComponent = EmpListComponent
  }
  


  emplist() {
    this.selectedComponent = EmpListComponent;
  }

  top10() {
    this.selectedComponent = Top10Component;
  }

  about() {
    this.selectedComponent = AboutComponent;
  }
  viewEmp(){
    
  }
}
