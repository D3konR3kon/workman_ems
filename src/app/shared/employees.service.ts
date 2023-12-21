import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  httpOptions:any={
    "Content-Type": "application/json",
  }
  api = 'http://localhost:3001/api/employees/'
  constructor(private http: HttpClient) { }

  getAll():Observable<any>{
    return this.http.get<any>(this.api)
  }
  create(payload: any):Observable<any>{
    return this.http.post<any>(`${this.api}`, payload)
  }
  getOne(emp_id:any):Observable<any>{
    return this.http.get<any>(this.api+emp_id)
  }
  update(emp_id:any, payload:any):Observable<any>{
    return this.http.put<any>(this.api + emp_id, payload)
  }
  removeOne(emp_id: any):Observable<any>{
    return this.http.delete<any>(this.api+emp_id)
  }
}
