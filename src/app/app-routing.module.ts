import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';

const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'about', component: AboutMeComponent },
	{ path: 'projects', component: MyProjectsComponent },
	{ path: 'experience', component: WorkExperienceComponent },
	{ path: 'contact', component: ContactMeComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
