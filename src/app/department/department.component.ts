import { Component, OnInit } from '@angular/core';
import { depts, Dept } from '../../shared/utils/dept';
import { NgbModal,NgbCarouselConfig,NgbActiveModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Location,PlatformLocation } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers:[NgbActiveModal,NgbModal]
})

export class DepartmentComponent implements OnInit {
  description: string;
  image: string;
  eventName: String;
  modalon:any;
  constructor(
    private modalService: NgbModal,
    public activemodal: NgbActiveModal,
    // private modalref:NgbModalRef,
    private route: ActivatedRoute,
    config: NgbCarouselConfig,
    private location:Location ,
    private loca:PlatformLocation
  ) {

    loca.onPopState(() => {
      console.log('hey!');
      if(localStorage.getItem('modal')=="true"){
        // this.modalref.close();
        confirm('closing modal');
        localStorage.setItem('modal','false');
        this.activemodal.close();
      }
    });
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    
    // this.modalon = this.route.snapshot.url.toString() ;
    // if(localStorage.getItem('modal')=='true'){
    //   console.log('hey');
    //   localStorage.setItem('modal','false');
    //   this.modalService.open(AbortModalComponent);
    // }
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
        navbar.classList.add('sticky');
      } else if (window.pageYOffset > sticky) {
        document.body.style.marginTop = navbar.scrollHeight + 'px';
        navbar.classList.add('sticky');
      }
      if (window.pageYOffset < sticky) {
        navbar.classList.remove('sticky');
        document.body.style.marginTop = '0px';
      }
    }
  }

  //ScrollSpy
  currentSection = 'section1';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section).scrollIntoView();
  }
  //Departments
  mydepts: Dept[] = depts;
  goback(){
    this.location.back();
  }

  

  openWindowCustomClass(content, desc: string, img: string, eventName: String) {
    this.description = desc;
    this.image = img;
    this.eventName = eventName;
    localStorage.setItem('modal','true');
    // this.modalon = true;
    // console.log(this.modalon);
    this.modalService.open(content, {
      windowClass: 'dark-modal',
      centered: true,
      size: 'lg',     
    });
  }
}
