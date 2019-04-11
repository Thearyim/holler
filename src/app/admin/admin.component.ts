import { Component, OnInit } from '@angular/core';
import { Business } from "../business.model";
import { BusinessService } from "../business.service"

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BusinessService]
})
export class AdminComponent implements OnInit {

  constructor(private businessService: BusinessService) { }

  ngOnInit() {
  }

  submitForm(title: string, review: string, description: string){
    let newBusiness: Business = new Business(title, review, description);
    this.businessService.addBusiness(newBusiness);
  }

}
