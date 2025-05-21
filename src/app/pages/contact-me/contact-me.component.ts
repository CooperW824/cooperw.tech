import { Component, OnInit } from '@angular/core';
import { faLaptopCode, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faLinkedin,
	faYoutube
} from '@fortawesome/free-brands-svg-icons';


@Component({
    selector: 'coop-contact-me',
    templateUrl: './contact-me.component.html',
    styleUrls: ['./contact-me.component.css'],
    standalone: false
})
export class ContactMeComponent implements OnInit {
	faLaptopCode = faLaptopCode;
	faGithub = faGithub;
	faLinkedin = faLinkedin;
	faYoutube = faYoutube;
	faEnvelope = faEnvelope;
	faHeart = faHeart;
	constructor() {}

	ngOnInit(): void {}
}
