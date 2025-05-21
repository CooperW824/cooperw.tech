import { Component, OnInit } from '@angular/core';
import {
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
    selector: 'coop-card-bar',
    templateUrl: './card-bar.component.html',
    styleUrls: ['./card-bar.component.css'],
    standalone: false
})
export class CardBarComponent implements OnInit {
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

	constructor() {}

	ngOnInit(): void {}
}
