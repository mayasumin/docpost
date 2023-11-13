import { Component, Input, OnInit } from '@angular/core';

interface texts {
  title: string,
  description: string,
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() texts: texts[] = [];
  @Input() indicators = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3500;

  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
    if(this.autoSlide) {
      this.autoSlidesText();
    }
  }

  autoSlidesText(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval)
  }

  onNextClick(): void {
    if(this.selectedIndex === this.texts.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  selectText(index: number): void {
    this.selectedIndex = index;
  }
}
