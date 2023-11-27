import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  api = 'http://localhost:3001/api/employees'
  constructor(private http: HttpClient) { }

  getAll():Observable<any>{
    return this.http.get<any>(this.api)
  }
}
