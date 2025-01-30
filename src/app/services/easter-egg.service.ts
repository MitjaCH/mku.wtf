import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EasterEggService {
  private secretKeys: string[] = ['Control', 'Shift', 'D'];
  private pressedKeys: string[] = [];
  isEasterEggActive = false;

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (this.secretKeys.includes(event.key)) {
      this.pressedKeys.push(event.key);
    }

    if (this.pressedKeys.length > this.secretKeys.length) {
      this.pressedKeys.shift();
    }

    if (
      this.pressedKeys.length === this.secretKeys.length &&
      this.pressedKeys.every((key, index) => key === this.secretKeys[index])
    ) {
      this.triggerEasterEgg();
    }
  }

  triggerEasterEgg() {
    this.isEasterEggActive = true;
  }
}
