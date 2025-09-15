import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fitimage',
  imports: [],
  templateUrl: './fitimage.component.html',
  styleUrl: './fitimage.component.css'
})
export class FitimageComponent {
  @Input() src!: string;
  @Input() alt!: string;
  constructor() {

  }
}
