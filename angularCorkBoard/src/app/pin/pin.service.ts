import {inject, Injectable} from '@angular/core';
import {Pin} from './pin.model';
import {Country} from '../country';
import {VendorService} from '../vendor/vendor.service';
import {PlaceService} from '../place/place.service';

//let vendorService = inject(VendorService)

@Injectable({
  providedIn: 'root'
})
export class PinService {
  private vendorService: VendorService;
  private placeService: PlaceService;
  private pinList : Pin[]

  constructor( ) {
    this.vendorService = inject(VendorService);
    this.placeService = inject(PlaceService);
    this.pinList = [
      {
        id: 0,
        slug: "birb",
        name: "Birb",
        image: "birb.png",
        country: Country.NL,
        description: "This pin has a birb on it :D",
        vendor: this.vendorService.getVendorByID(0),
        //uploader: User;
        width: 30,
        height: 34,
      },
      {
        id: 1,
        slug: "esf-gold",
        name: "ESF Gold Star",
        image: "esf gold.png",
        country: Country.FR,
        description: "Badge for completing the Gold Star level of the French Ski School",
        place: this.placeService.getGeolocation(),
        vendor: this.vendorService.getVendorByID(1),
        //uploader: User;
        width: 26,
        height: 25,
      },
    ];
  }

  getPinByID(id: number): Pin | undefined {
    return this.pinList.find((pin: Pin) => pin.id === id);
  }

}
