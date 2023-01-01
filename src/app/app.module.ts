import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardBarComponent } from './components/card-bar/card-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';

@NgModule({
	declarations: [
		AppComponent,
		NavBarComponent,
		HomePageComponent,
		CardBarComponent,
		FooterComponent,
		AboutMeComponent,
		MyProjectsComponent,
		ContactMeComponent,
		WorkExperienceComponent
	],
	imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
