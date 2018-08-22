import { Component, OnInit } from '@angular/core';
import {depts,Dept } from './Depts/dept';
import { NgbModal,NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  description:string;
  image:string;
  constructor(
    private modalService:NgbModal,
    config: NgbCarouselConfig
  ) { 
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
    config.showNavigationIndicators= true;
  }

  ngOnInit() {
  }
  mydepts:Dept[] = depts;

  openWindowCustomClass(content, desc: string, img: string) {
    this.description = desc;
    this.image = img;
    this.modalService.open(content, { windowClass: 'dark-modal', centered: true, size:'lg' });
  }


}
