import {Vendor} from '../vendor/vendor.model';
import {Country} from '../country';

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
  geoLocation: Geolocation;
}

export type PinModel = GeoPin | VendorPin | (GeoPin & VendorPin);
