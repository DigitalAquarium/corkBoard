import {AfterViewInit, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {isGeoPin, isVendorPin, Pin} from '../pin.model';
import {PinService} from '../pin.service';
import {Country} from '../../country';
import {VendorService} from '../../vendor/vendor.service';
import 'leaflet/dist/leaflet.css';
import L, {LatLng} from "leaflet";
import {FlagtextComponent} from '../../flagtext/flagtext.component';
import {FitimageComponent} from '../../fitimage/fitimage.component';


@Component({
  selector: 'app-pin-details',
  imports: [CommonModule, FlagtextComponent, FitimageComponent],
  templateUrl: './pin.details.component.html',
  standalone: true,
  styleUrls: ['./pin.details.component.css']
})
export class PinDetailsComponent implements AfterViewInit{
  route: ActivatedRoute = inject(ActivatedRoute);
  pin: Pin;
  pinService = inject(PinService);
  vendorService = inject(VendorService);
  constructor() {
    const pinId = Number(this.route.snapshot.params['id']);
    this.pin = this.pinService.getPinByID(pinId);
  }

  ngAfterViewInit(): void {
    if (isGeoPin(this.pin)) {
      let map = L.map('osm-map');
      let target = new LatLng(this.pin.place.lat, this.pin.place.lng);
      map.setView(target, 6);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        minZoom: 2,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
      L.marker(target).addTo(map)
        .bindPopup(this.pin.place.name + ", " + this.pin.place.country)
        .openPopup();
    }
  }

  protected readonly isGeoPin = isGeoPin;
  protected readonly isVendorPin = isVendorPin;
}
