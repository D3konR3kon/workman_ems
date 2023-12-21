import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CPanelComponent } from './comps/c-panel/c-panel.component';
import { ViewEmpComponent } from './comps/view-emp/view-emp.component';
import { AddComponent } from './comps/add/add.component';

const routes: Routes = [
  {path: "cpanel", component: CPanelComponent},
  {path: "" ,redirectTo: "cpanel",pathMatch: 'full'},
  {path: "view/:emp_id" ,component: ViewEmpComponent},
  {path: "add" ,component: AddComponent},
  
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
