import {inject, Injectable} from '@angular/core';
import {Pin} from '../../pin/pin.model';
//import {Country} from '../country';
//import {VendorService} from '../vendor/vendor.service';
import {Poke} from './poke.model';
import {PinService} from '../../pin/pin.service';

//let vendorService = inject(VendorService)

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private pinService: PinService;
  private pokeList : Poke[]

  constructor( ) {
    this.pinService = inject(PinService);
    this.pokeList = [
      {
        id:0,
        pin: this.pinService.getPinByID(0),
        x: 0,
        y: 0,
        //day: number,
        //month: number,
        year: 2023,
      },
      {
        id:1,
        pin: this.pinService.getPinByID(1),
        x: 25,
        y: 25,
        //day: number,
        //month: number,
        year: 2012,
      }
    ]
  }

  getPokeByID(id: number): Poke {
    let p = this.pokeList.find((poke: Poke) => poke.id === id);
    if (p == undefined){
      return this.pokeList[0]
    }
    else return p
  }

  getAllPokes(): Poke[]{
    return this.pokeList
  }

}
