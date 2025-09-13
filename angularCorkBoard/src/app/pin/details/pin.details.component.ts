import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Pin} from '../pin.model';
import {PinService} from '../pin.service';
import {Country} from '../../country';
import {VendorService} from '../../vendor/vendor.service';

@Component({
  selector: 'app-pin-details',
  imports: [CommonModule],
  templateUrl: './pin.details.component.html',
  standalone: true,
  styleUrls: ['./pin.details.component.css']
})
export class PinDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  pin: Pin;
  pinService = inject(PinService);
  vendorService = inject(VendorService);
  constructor() {
    const pinId = Number(this.route.snapshot.params['id']);
    let x = this.pinService.getPinByID(pinId);
    console.log(x);
    if (x===undefined){
      this.pin = {
        id: 0,
        slug: "birb",
        name: "Birb error",
        image: "birb.png",
        country: Country.NL,
        description: "This pin has a birb on it :D",
        vendor: this.vendorService.getVendorByID(0),
        //uploader: User;
        width: 30,
        height: 34,
      }
    }
    else {
      this.pin = x;
    }
  }
}
