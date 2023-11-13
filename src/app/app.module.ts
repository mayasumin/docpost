import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionPresentationComponent } from './components/section-presentation/section-presentation.component';
import { SectionServicesComponent } from './components/section-services/section-services.component';
import { CarouselModule } from './carousel/carousel.module';
import { SectionCommentsComponent } from './components/section-comments/section-comments.component';
import { SectionFaqComponent } from './components/section-faq/section-faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionPresentationComponent,
    SectionServicesComponent,
    SectionCommentsComponent,
    SectionFaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
