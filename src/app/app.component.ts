import { Component, HostListener } from '@angular/core';
import messagesJson from '../assets/messages.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Damien';
  isSliderVisible = false;
  sliderIndex = 0;
  maxSliderIndex = 4;
  messages = messagesJson;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key == 'Escape') {
      this.hideFrontSlider();
      this.sliderIndex = 0;
    }

    if (event.key == 'ArrowLeft') {
        this.previousSlide();
    }

    if (event.key == 'ArrowRight') {
        this.nextSlide();
    }
  }

  showFrontSlider(): void {
    this.isSliderVisible = true;
  }

  hideFrontSlider(): void {
    this.isSliderVisible = false;
  }

  previousSlide():void {
    if (this.isSliderVisible && this.sliderIndex > 0) {
      this.sliderIndex--;
    }
  }

  nextSlide():void {
    if (this.isSliderVisible && this.sliderIndex < this.maxSliderIndex) {
      this.sliderIndex++;
    }
  }

}
