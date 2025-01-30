import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-easter-egg-popup',
  imports: [],
  templateUrl: './easter-egg-popup.component.html',
  styleUrl: './easter-egg-popup.component.css'
})
export class EasterEggPopupComponent {
  @Input() isPopupVisible: boolean = false;

  closePopup() {
    this.isPopupVisible = false;
  }
}
