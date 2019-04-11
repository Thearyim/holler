import { Injectable } from '@angular/core';
import { Business } from "./business.model";

@Injectable()
export class BusinessService {

  constructor() { }

  getBusinesses() {
  return this.businesses;
  }

}
