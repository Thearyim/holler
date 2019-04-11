import { Component, OnInit } from '@angular/core';
import { Business } from '../business.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-holler',
  templateUrl: './holler.component.html',
  styleUrls: ['./holler.component.css']
})
export class HollerComponent implements OnInit {
  currentRoute: string = this.router.url;

  goToDetailPage(clickedBusiness){
  this.router.navigate(["businesses", clickedBusiness.$key]);
  }

  constructor() { }

  ngOnInit() {
  }

}
