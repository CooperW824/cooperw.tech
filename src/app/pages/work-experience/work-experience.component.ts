import { Component, OnInit } from '@angular/core';

interface reference {
	name: string;
	title: string;
	email: string;
}

interface experience {
	buttonName: string;
	company: string;
	timeline: string;
	title: string;
	keyRoles: string[];
	skills: string[];
	
}

@Component({
	selector: 'coop-work-experience',
	templateUrl: './work-experience.component.html',
	styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
	jobs: experience[] = [
		{
			buttonName: 'Paraxial Technologies',
			company: 'Paraxial Technologies',
			timeline: 'April 2024 - Present',
			title: 'Software Engineering Intern',
			keyRoles: [
				"Develop an automated testing framework for the company's lung nodule segmentation software",
				"Port the lung nodule segmentation software from Ubuntu 16.04 to Ubuntu 22.04",
				"Develop an ITK image processing pipeline to detect and quantify emphysema in CT scans",
				"Research factors that influence the size, growth, and malignancy of lung nodules",
			],
			skills: [
				"Python",
				"C++",
				"ITK",
				"VTK",
				"Ubuntu",
				"Git",
				"GitHub",
				"Image Processing",
			].sort()
		},
		{
			buttonName: 'TechSlice',
			company: 'TechSlice',
			timeline: 'August 2022 - August 2023',
			title: 'Software Engineering Intern',
			keyRoles: [
				'Develop web-based user interfaces in NextJS, Nuxt 3 and Angular',
				'Connect user interfaces with AWS resources using AWS Amplify',
				'Integrate third-party systems like ArcGIS to add functionality to apps',
				'Built systems for large scale batch data processing using AWS Batch',
				'Implemented TOTP and WebAuthn MFA for internal and client projects.'
			],
			skills: [
				'AWS Amplify',
				'NextJS',
				'Angular',
				'TailwindCSS',
				'AWS Lambda',
				'AWS DynamoDB',
				'AWS AppSync', 
				'Terraform',
				'Nuxt 3',
				'AWS Batch',
				'TOTP MFA',
				'WebAuthn / Passkey MFA'
			].sort()
		},
		{
			buttonName: 'SMR',
			company: 'Software, Magic, and Rainbows',
			title: 'Software Engineering Intern',
			keyRoles: [
				'Develop plugins designed to read USB data for hobbits',
				'Give weekly updates about my progress on my plugins',
				'Deploy my code using Git, GitHub, and GitHub Actions'
			],
			timeline: 'June 2021 - August 2021',
			skills: [
				'QT',
				'C++',
				'Git',
				'GitHub',
				'Linux',
				'GCC',
				'GDB',
				'USB'
			].sort(),
		}
	];

	previousButton: string = `${this.jobs[0].company}Button`;
	previousWorkDisplay: string = `${this.jobs[0].company}Display`;
	constructor() {}

	ngOnInit(): void {}

	ngAfterViewChecked(): void {
		let buttonElm = document.getElementById(this.previousButton);
		buttonElm?.classList.add('selected');
		let displayElm = document.getElementById(this.previousWorkDisplay);
		displayElm?.classList.add('activeDisplay');
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
		let displayElm = document.getElementById(display);
		displayElm?.classList.toggle('activeDisplay');
		displayElm = document.getElementById(this.previousWorkDisplay);
		displayElm?.classList.toggle('activeDisplay');
		this.previousWorkDisplay = display;
	}
}
