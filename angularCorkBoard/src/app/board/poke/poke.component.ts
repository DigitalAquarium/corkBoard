import {Component, inject, input, Input} from '@angular/core';
import {FitimageComponent} from '../../fitimage/fitimage.component';
import {Poke} from './poke.model';
import {PokeService} from './poke.service';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-poke',
  imports: [
    FitimageComponent,
    NgStyle,
  ],
  templateUrl: './poke.component.html',
  styleUrl: './poke.component.css'
})
export class PokeComponent {
  @Input() poke!:Poke;
  @Input() zoom!: number;
  width:number = 0;
  height:number = 0;
  constructor() {

}
ngOnInit() {
  this.width = this.poke.pin.width * this.zoom;
  this.height = this.poke.pin.height * this.zoom;
}
}
