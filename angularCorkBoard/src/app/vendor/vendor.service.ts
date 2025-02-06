import {Injectable} from '@angular/core';
import {Country} from '../country';
import {Vendor} from './vendor.model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  //
  // readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  theVendor: Vendor = {
    id: 0,
    name: "roundbirbart",
    country: Country.NL,
    url: "www.roundbirb.art",
  }
  getVendor(): Vendor {
    return this.theVendor;
  }

  constructor() { }
}
