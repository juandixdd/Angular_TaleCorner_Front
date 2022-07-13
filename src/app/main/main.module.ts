import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { StoriesComponent } from './pages/landing/stories/stories.component';
import { AuthorsComponent } from './pages/landing/authors/authors.component';



@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    StoriesComponent,
    AuthorsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
