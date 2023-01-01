import { Component, OnInit } from '@angular/core';
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'coop-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
	faList = faBars;
	faWindowClose = faWindowClose;

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
