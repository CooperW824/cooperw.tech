import { Component, OnInit } from '@angular/core';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'coop-contact-me',
	templateUrl: './contact-me.component.html',
	styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
	faLaptopCode = faLaptopCode;
	constructor() {}

	ngOnInit(): void {}
}
