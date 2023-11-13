import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination,EffectCoverflow } from 'swiper';

SwiperCore.use([Navigation, Pagination,EffectCoverflow]);

@Component({
  selector: 'app-section-comments',
  templateUrl: './section-comments.component.html',
  styleUrls: ['./section-comments.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SectionCommentsComponent {

}
