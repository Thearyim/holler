import { Component, OnInit } from '@angular/core';
import { Business } from '../business.model';
import { Router } from '@angular/router';
import { BusinessService } from "../business.service";
import { FirebaseListObservable } from "angularfire2/database"


@Component({
  selector: 'app-holler',
  templateUrl: './holler.component.html',
  styleUrls: ['./holler.component.css'],
  providers: [BusinessService]
})
export class HollerComponent implements OnInit {
  businesses: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private businessService: BusinessService) { }

  goToDetailPage(clickedBusiness){
  this.router.navigate(["businesses", clickedBusiness.$key]);
  }

  ngOnInit() {
    this.businesses = this.businessService.getBusinesses();
  }
}
