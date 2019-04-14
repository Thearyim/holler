import { Injectable } from '@angular/core';
import { Business } from "./business.model";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Injectable()
export class BusinessService {
  private businesses: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.businesses = database.list("businesses");
  }

  getBusinesses(category: string = null) {
    // let matchingBusinesses : Business[];
    // let businessRef = this.database.ref("businesses/");

    if (category) {
      return this.database.list("businesses", {
            query: {
                orderByChild: "category",
                equalTo: category
            }
        });
    }
    else {
      return this.database.list("businesses");
    }

    // return matchingBusinesses;
  }

  addBusiness(newBusiness: Business){
    this.businesses.push(newBusiness);
  }

  getBusinessById(businessId: string){
    return this.database.object("businesses/" + businessId);
  }

  updateBusiness(localUpdatedBusiness){
    let businessEntryInFirebase = this.getBusinessById(localUpdatedBusiness.$key);
    businessEntryInFirebase.update({title: localUpdatedBusiness.title,
                                    description: localUpdatedBusiness.description,
                                    address: localUpdatedBusiness.address,
                                    phone: localUpdatedBusiness.phone,
                                    businessHours: localUpdatedBusiness.businessHours});
  }

  deleteBusiness(localBusinessToDelete){
    let businessEntryInFirebase = this.getBusinessById(localBusinessToDelete.$key);
    businessEntryInFirebase.remove();
  }
}
