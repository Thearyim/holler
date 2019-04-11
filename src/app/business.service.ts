import { Injectable } from '@angular/core';
import { Business } from "./business.model";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Injectable()
export class BusinessService {
  businesses: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.businesses = database.list("businesses");
  }

  getBusinesses() {
  return this.businesses;
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
                                    review: localUpdatedBusiness.review,
                                    description: localUpdatedBusiness.description,
                                    address: localUpdatedBusiness.address,
                                    phone: localUpdatedBusiness.phone,
                                    hour: localUpdatedBusiness.hour});
  }

  deleteBusiness(localBusinessToDelete){
    let businessEntryInFirebase = this.getBusinessById(localBusinessToDelete.$key);
    businessEntryInFirebase.remove();
  }

}
