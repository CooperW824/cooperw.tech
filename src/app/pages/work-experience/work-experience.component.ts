import { Component, OnInit } from '@angular/core';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'coop-work-experience',
	templateUrl: './work-experience.component.html',
	styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
	faLaptopCode = faLaptopCode;

	constructor() {}

	ngOnInit(): void {}
}
