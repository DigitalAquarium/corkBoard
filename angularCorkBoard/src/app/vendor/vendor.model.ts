import {Country} from '../country';

export interface Vendor {
  id: number;
  name: string;
  country: Country;
  url: string;
}
