import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() {
    
  }

  ngOnInit() {}

  toggleNav() {
    let overlay = document.getElementById('overlay');
    if (overlay.style.display === 'none') {
      overlay.style.display = '';
    } else {
      overlay.style.display = 'none';
    }
  }
}
