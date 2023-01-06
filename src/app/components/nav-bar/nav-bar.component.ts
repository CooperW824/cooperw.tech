import { Component, OnInit } from '@angular/core';
import {
	faBars,
	faWindowClose,
	faPhone,
	faEnvelope,
	faCode,
	faFileCode,
	faLaptopCode,
	faUser,
	faMusic,
	faSchool,
	faFilePdf,
	faDownload,
	faHome
} from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
@Component({
	selector: 'coop-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
	faList = faBars;
	faWindowClose = faWindowClose;
	faPhone = faPhone;
	faEnvelope = faEnvelope;
	faBuilding = faBuilding;
	faCode = faCode;
	faFileCode = faFileCode;
	faGithub = faGithub;
	faLaptopCode = faLaptopCode;
	faUser = faUser;
	faMusic = faMusic;
	faSchool = faSchool;
	faFilePdf = faFilePdf;
	faDownload = faDownload;
	faHome = faHome;

	mobileMenu: HTMLElement | null | undefined;
	constructor(private router: Router) {}

	ngOnInit(): void {}

	ngAfterContentChecked(): void {
		this.mobileMenu = document.getElementById('mobileMenu');
	}

	toggleMobileMenu(): void {
		this.mobileMenu?.classList.toggle('hidden');
	}

	toPage(route: '' | 'about' | 'projects' | 'experience' | 'contact'): void {
		this.mobileMenu?.classList.toggle('hidden');
		this.router.navigateByUrl(route);
	}
}
