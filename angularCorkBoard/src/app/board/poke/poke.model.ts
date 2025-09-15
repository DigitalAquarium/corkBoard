import {Pin} from '../../pin/pin.model';

export interface Poke {
  id:number;
  pin: Pin;
  x: number;
  y: number;
}
