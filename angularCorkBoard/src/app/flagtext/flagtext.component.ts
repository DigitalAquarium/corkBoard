import {Component, Inject, Input, input} from '@angular/core';
import {Country, getFlag} from '../country';

@Component({
  selector: 'app-flagtext',
  imports: [],
  templateUrl: './flagtext.component.html',
  styleUrl: './flagtext.component.css'
})
export class FlagtextComponent {
  @Input() text!: string;
  @Input() country!: Country;
  protected readonly getFlag = getFlag;
  constructor() {
  }
}
