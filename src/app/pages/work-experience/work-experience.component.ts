import { Component, OnInit } from '@angular/core';

interface reference {
	name: string;
	title: string;
	email: string;
}

interface experience {
	company: string;
	// title: string;
	// keyRoles: string[];
	// skills: string[];
	// references: reference[]
}

@Component({
	selector: 'coop-work-experience',
	templateUrl: './work-experience.component.html',
	styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
	jobs: experience[] = [
		{
			company: 'TechSlice'
		},
		{
			company: 'Bellese'
		},
		{
			company: 'SMR'
		}
	];

	previousButton: string = `${this.jobs[0].company}Button`;
	previousWorkDisplay: string = `${this.jobs[0].company}Display`;
	constructor() {}

	ngOnInit(): void {}

	ngAfterViewChecked(): void {
		let buttonElm = document.getElementById(this.previousButton);
		buttonElm?.classList.add('selected');
	}

	open(company: string): void {
		let button = `${company}Button`;
		let display = `${company}Display`;
		console.log(`${button}, ${display}`);
		let buttonElm = document.getElementById(button);
		buttonElm?.classList.toggle('selected');
		buttonElm = document.getElementById(this.previousButton);
		buttonElm?.classList.toggle('selected');
		this.previousButton = button;
	}
}
