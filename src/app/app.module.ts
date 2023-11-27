import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './comps/login/login.component';
import { CPanelComponent } from './comps/c-panel/c-panel.component';
import { EmpListComponent } from './comps/emp-list/emp-list.component';
import { ViewEmpComponent } from './comps/view-emp/view-emp.component';
import { Top10Component } from './comps/top10/top10.component';
import { FilterPipe } from './filter.pipe';
import { AboutComponent } from './comps/about/about.component';
import { AddComponent } from './comps/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CPanelComponent,
    EmpListComponent,
    ViewEmpComponent,
    Top10Component,
    FilterPipe,
    AboutComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
