import {Country} from '../country';


export interface Geolocation {
  id: number;
  name: string;
  country: Country;
  url: string;
  lat: number;
  lng: number;
}
