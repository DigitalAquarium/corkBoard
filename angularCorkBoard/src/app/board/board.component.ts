import {Component, inject} from '@angular/core';
import {Board} from './board.model';
import {BoardService} from './board.service';
import {Poke} from './poke/poke.model';
import {PokeService} from './poke/poke.service';
import {ActivatedRoute} from '@angular/router';
import {PokeComponent} from './poke/poke.component';

@Component({
  selector: 'app-board',
  imports: [
    PokeComponent
  ],
  standalone: true,
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  board:Board;
  pokes:Poke[];
  pokeService = inject(PokeService);
  constructor() {
    this.board = new BoardService().getBoard()
    this.pokes = this.pokeService.getAllPokes()

  }

  pokeBL(p:Poke):number[]{
    return [p.x - p.pin.width/2, p.y - p.pin.height/2]
  }
  pokeTR(p:Poke):number[]{
    return [p.x + p.pin.width/2, p.y + p.pin.height/2]
  }
  coordRange():number[][]{
    let minCoord = [Number.MAX_VALUE,Number.MAX_VALUE]
    let maxCoord = [Number.MIN_VALUE,Number.MIN_VALUE]
    for (let i=0; i < this.pokes.length; i++){
      let bl = this.pokeBL(this.pokes[i])
      let tr = this.pokeTR(this.pokes[i])
      if (bl[0] < minCoord[0] || bl[1] < minCoord[1]) {
        minCoord = bl
      }
      if (tr[0] > maxCoord[0] || tr[1] > maxCoord[1]) {
        maxCoord = tr
      }
    }
    return [minCoord, maxCoord]
  }
}
