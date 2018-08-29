import { Component, OnInit } from '@angular/core';
import { depts, Dept } from './Depts/dept';
import { NgbModal, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  description: string;
  image: string;
  constructor(private modalService: NgbModal, config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {
      myFunction();
    };

    // Get the navbar
    var navbar = document.getElementById('navbar');
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset == navbar.offsetTop) {
        document.body.style.marginTop = navbar.scrollHeight + 'px';
      } else if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
        document.body.style.marginTop = '0px';
      
      }
    }
  }
  mydepts: Dept[] = depts;

  openWindowCustomClass(content, desc: string, img: string) {
    this.description = desc;
    this.image = img;
    this.modalService.open(content, {
      windowClass: 'dark-modal',
      centered: true,
      size: 'lg'
    });
  }

  jump() {
    var myDiv = document.getElementById('GC');
    myDiv.scrollIntoView();
  }
}
