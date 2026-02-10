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
	styleUrls: ['./work-experience.component.css'],
	standalone: false
})
export class WorkExperienceComponent implements OnInit {
	jobs: experience[] = [
		{
			buttonName: 'Hardware Engineering Contractor',
			company: 'Independent Contractor',
			timeline: 'November 2025 - January 2026',
			title: 'Hardware Design Engineer',
			keyRoles: [
				"Designed a 4-layer PCB containing an STM32, high-fidelity ADCs, and Ethernet connectivity.",
				"Managed a BOM of 300+ components, performing Design for Manufacturing (DFM) reviews reducing production lead times by 10%.",
				"Implemented controlled impedance differential pairs for Ethernet and USB interfaces, ensuring signal integrity for data rates exceeding 100 Mbps."
			],
			skills: [
				"PCB Design",
				"STM32",
				"High-Speed Digital Design",
				"Design for Manufacturing (DFM)",
				"Ethernet",
				"ADC",
				"KiCAD",
			].sort()
		},
		{
			buttonName: `Corning Incoporated`,
			company: 'Corning Incorporated - Advanced Optics',
			timeline: 'June 2025 - August 2025',
			title: 'Metrology Software Engineering Intern',
			keyRoles: [
				"Optimized image processing algorithms used in measuring spherical optics, reducing the time taken to measure an optic by 50%.",
				"Implemented a PID controller to monitor and correct metrology system alignment, improving accuracy by 10%",
				"Communicated my work to 100+ other engineers in a brief and effective presentation.",
			],
			skills: [
				"Python",
				"Control Systems",
				"Image Processing",
				"Metrology",
				"Git",
				"GitLab",
			].sort()
		},
		{
			buttonName: 'Paraxial Technologies',
			company: 'Paraxial Technologies',
			timeline: 'April 2024 - September 2024',
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
	];

	previousButton: string = `${this.jobs[0].buttonName}Button`;
	previousWorkDisplay: string = `${this.jobs[0].buttonName}Display`;
	constructor() { }

	ngOnInit(): void { }

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
