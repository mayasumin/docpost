import { Component } from '@angular/core';

@Component({
  selector: 'app-section-faq',
  templateUrl: './section-faq.component.html',
  styleUrls: ['./section-faq.component.scss']
})
export class SectionFaqComponent {
  showFirstAnswer: boolean = false;
  showSecondAnswer: boolean = false;
  showThirdAnswer: boolean = false;
}
