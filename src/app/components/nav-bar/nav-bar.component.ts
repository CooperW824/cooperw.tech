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
	faSchool
} from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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

	mobileMenu: HTMLElement | null | undefined;
	constructor() {}

	ngOnInit(): void {}

	ngAfterContentChecked(): void {
		this.mobileMenu = document.getElementById('mobileMenu');
	}

	toggleMobileMenu(): void {
		console.log('test');
		console.log(this.mobileMenu);
		this.mobileMenu?.classList.toggle('hidden');
	}
}
