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

  submitForm(name: string, description: string, category: string, address: string, phone: string, businessHours: string){
    let newBusiness: Business = new Business(name, description, category, address, phone, businessHours);
    this.businessService.addBusiness(newBusiness);
  }

}
