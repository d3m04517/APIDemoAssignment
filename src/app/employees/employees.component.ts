import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../data/Employee';
import { EmployeeService } from '../data/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  getEmployeesSub: any;
  loadingError: boolean = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployeesSub = this.employeeService.getEmployees().subscribe(employees => this.employees = employees, err => this.loadingError = err);
  }

  ngOnDestroy() {
    if (this.getEmployeesSub != undefined) {
     this.getEmployeesSub.unsubscribe();
    }
  }
}
