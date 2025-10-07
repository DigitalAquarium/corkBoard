import {Poke} from './poke/poke.model';

export interface Board{
  id:number;
  slug:string;
  background:string;
  pokes: Poke[];
}
