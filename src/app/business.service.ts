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

}
