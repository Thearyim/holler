import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Business } from '../business.model';
import { BusinessService } from "../business.service";
import { FirebaseObjectObservable } from "angularfire2/database";

@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.css'],
  providers: [BusinessService]
})
  export class BusinessDetailComponent implements OnInit {
    businessId: string;
    businessToDisplay;

  constructor(private route: ActivatedRoute, private location: Location,private businessService: BusinessService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.businessId = urlParameters['id'];
    });
    this.businessService.getBusinessById(this.businessId).subscribe(dataLastEmittedFromObserver => {
    this.businessToDisplay = new Business(dataLastEmittedFromObserver.title, dataLastEmittedFromObserver.review, dataLastEmittedFromObserver.description, dataLastEmittedFromObserver.address, dataLastEmittedFromObserver.phone, dataLastEmittedFromObserver.hour);
    });

  }
}
