import { Component, OnInit } from '@angular/core';
import { NgbModal,NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images:string[] = [
    "assets/ganeshaidol.jpg",
    "assets/food_wastage.JPG",
    "assets/gallery/plant.jpg",
    "assets/verdade.jpg",    
  ]
  constructor(
    private modalService:NgbModal,
    config: NgbCarouselConfig
  ) {
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators= true;
   }

  ngOnInit() {
  }
  openWindowCustomClass(content, desc?: string, img?: string) {
    // this.description = desc;
    // this.image = img;
    this.modalService.open(content, { windowClass: 'dark-modal', centered: true, size:'lg' });
  }

}
