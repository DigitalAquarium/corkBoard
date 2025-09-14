import {Country} from '../country';


export interface Place {
  id: number;
  name: string;
  country: Country;
  url: string;
  lat: number;
  lng: number;
}
