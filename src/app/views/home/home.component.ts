import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  images = ['../../assets/1.jpg', '../../assets/2.jpg', '../../assets/3.jpg' ];

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  onSignUp() {
    this.router.navigate(['signup']);
  }

}
