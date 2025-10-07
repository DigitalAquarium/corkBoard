import {PokeService} from './poke/poke.service';
import {inject, Injectable} from '@angular/core';
import {Board} from './board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private pokeService: PokeService;
  private readonly theBoard : Board;

  constructor( ) {
    this.pokeService = inject(PokeService);
    this.theBoard = {
      id:0,
      pokes: this.pokeService.getAllPokes(),
      slug:"The Board",
      background: "flags/bubbles-bg.png"
    }
  }

  getBoard(): Board {
    return this.theBoard
  }

}
