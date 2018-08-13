import { Component, OnInit } from '@angular/core';
import { depts, Dept } from './Depts/dept';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-department,ngbd-carousel-basic',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers: [NgbCarouselConfig]
})
export class DepartmentComponent implements OnInit {
  mydepts: Dept[];
  showNavigationArrows = true;
  showNavigationIndicators = true;
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    this.mydepts = depts;
  }

}
