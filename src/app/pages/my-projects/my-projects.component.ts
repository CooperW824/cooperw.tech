import { Component, OnInit } from '@angular/core';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'coop-my-projects',
	templateUrl: './my-projects.component.html',
	styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {
	faLaptopCode = faLaptopCode;
	constructor() {}

	ngOnInit(): void {}
}
