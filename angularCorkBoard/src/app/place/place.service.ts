import {Injectable} from '@angular/core';
import {Country} from '../country';
import {Place} from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  public theGeolocation: Place = {
    id: 0,
    name: "Les Coches",
    country: Country.FR,
    url: "https://en.la-plagne.com/montchavin-les-coches",
    lat: 45.5547061,
    lng: 6.7286362,
  }
  getGeolocation(): Place {
    return this.theGeolocation;
  }

  constructor() { }
}
