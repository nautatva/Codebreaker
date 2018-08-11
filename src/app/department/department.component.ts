import { Component, OnInit } from '@angular/core';
import {depts,Dept } from './Depts/dept';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  mydepts:Dept[] = depts;
}
