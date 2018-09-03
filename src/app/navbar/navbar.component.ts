import { Component, OnInit, Host, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {}
  
  @HostListener('window:click',['$event'])
  onclick(event:any){
    var box = document.getElementById('overlay');
    var ham = document.getElementById('hamimage');
    // console.log(event.target)
    // console.log('hey!!!!!')
    if(box.style.display === '' && event.target != box && event.target !=ham){
      // console.log(box.style.display);
      // console.log('hello');
      this.toggleNav();
    }
  }

  toggleNav() {
    let overlay = document.getElementById('overlay');
    // console.log('in toggle');
    // console.log(overlay.style.display)
    if (overlay.style.display === 'none') {
      overlay.style.display = '';
      // console.log('opening');
    } else {
      overlay.style.display = 'none';
      // console.log('closing')
    }
  }
}
