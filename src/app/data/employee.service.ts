import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from './Employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>("https://floating-atoll-31296.herokuapp.com/employees");
  }
}
