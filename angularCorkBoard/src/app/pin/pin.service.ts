import {inject, Injectable} from '@angular/core';
import {PinModel} from './pin.model';
import {Country} from '../country';
import {VendorService} from '../vendor/vendor.service';

let vendorService = inject(VendorService)

@Injectable({
  providedIn: 'root'
})
export class PinService {
  thePin: PinModel = {
    id: 0,
    slug: "birb",
    name: "Birb",
    image: "../assets/birb.jpg",
    country: Country.NL,
    description: "This pin has a birb on it :D",
    vendor: vendorService.getVendor(),
    //uploader: User;
    width: 30,
    height: 34,
  }
  getPin(): PinModel {
    return this.thePin;
  }

  constructor() { }
}
