import { Component, OnInit } from '@angular/core';
import { Business } from '../business.model';
import { Router } from '@angular/router';
import { BusinessService } from "../business.service";


@Component({
  selector: 'app-holler',
  templateUrl: './holler.component.html',
  styleUrls: ['./holler.component.css'],
  providers: [BusinessService]
})
export class HollerComponent implements OnInit {
  currentRoute: string = this.router.url;

  goToDetailPage(clickedBusiness){
  this.router.navigate(["businesses", clickedBusiness.$key]);
  }

  constructor(private router: Router, private businessService: BusinessService) { }

  ngOnInit() {
    this.businesses = this.businessService.getBusinesses();
  }

}
