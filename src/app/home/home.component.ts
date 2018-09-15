import { Component, OnInit } from '@angular/core';
// import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // window.onscroll = function() {
    //   hello();
    // };
  }
  // function hello() {
  //   console.log('hello');
  //   element = document.getElementById('introImg');
  //   element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // }
}
