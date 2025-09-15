import {Vendor} from '../vendor/vendor.model';
import {Country} from '../country';
import {Place} from '../place/place.model';

interface BasicPin {
  id: number;
  slug: string;
  name: string;
  image: string;
  country: Country;
  description: string;
  //uploader: User;
  width: number;
  height: number;
}
interface VendorPin extends BasicPin {
  vendor: Vendor;
}
interface GeoPin extends BasicPin {
  place: Place;
}

export type Pin = GeoPin | VendorPin | (GeoPin & VendorPin);
//export type Pin = VendorPin;

export function isGeoPin(pin:Pin): pin is GeoPin {
  return 'place' in pin
}
export function isVendorPin(pin:Pin): pin is VendorPin {
  return 'vendor' in pin
}
