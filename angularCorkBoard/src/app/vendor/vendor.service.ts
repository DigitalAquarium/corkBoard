import {Injectable, output} from '@angular/core';
import {Country} from '../country';
import {Vendor} from './vendor.model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  vendorList: Vendor[] = [
    {id: 0,
      name: "roundbirbart",
      country: Country.NL,
      url: "www.roundbirb.art",},
    {
      id: 1,
      name: "École du ski français",
      country: Country.FR,
      url: "https://www.esf-uk.co.uk/",
    },
  ];

  getVendorByID(id: number): Vendor {
    let output : Vendor | undefined;
    output = this.vendorList.find((vendor: Vendor) => vendor.id === id);
    if (output === undefined){
      return {
        id:-1,
        name:"Error, Placeholder",
        country: Country.GB,
        url: "https://github.com/digitalaquarium",
      }
    }
    else{
      return output
    }
  }

  constructor() { }
}
