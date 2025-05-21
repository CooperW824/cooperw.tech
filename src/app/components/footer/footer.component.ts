import { Component, OnInit } from '@angular/core';
import {
	faGithub,
	faLinkedin,
	faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'coop-footer',
    templateUrl: './footer.component.html',
    standalone: false
})
export class FooterComponent implements OnInit {
	faGithub = faGithub;
	faLinkedin = faLinkedin;
	faYoutube = faYoutube;
	faEnvelope = faEnvelope;
	faHeart = faHeart;

	constructor() {}

	ngOnInit(): void {}
}
