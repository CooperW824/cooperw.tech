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
	references: reference[];
}

@Component({
	selector: 'coop-work-experience',
	templateUrl: './work-experience.component.html',
	styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
	jobs: experience[] = [
		{
			buttonName: 'TechSlice',
			company: 'TechSlice',
			timeline: 'August 2022 - Present',
			title: 'Software Engineering Intern',
			keyRoles: [
				'Develop web-based user interfaces in NextJS and Angular',
				'Connect user interfaces with AWS resources using AWS Amplify',
				'Integrate third-party systems like ArcGIS to add functionality to apps'
			],
			skills: [
				'AWS Amplify',
				'NextJS',
				'Angular',
				'TailwindCSS',
				'AWS Lambda',
				'AWS DynamoDB',
				'AWS AppSync'
			].sort(),
			references: [
				{
					name: 'Juliana Buonanno',
					title: 'CEO',
					email: 'juliana@techslice.com'
				},
				{
					name: 'Matthew Lim',
					title: 'CTO',
					email: 'matthew@techslice.com'
				}
			]
		},
		{
			buttonName: 'Bellese',
			company: 'Bellese Technologies',
			title: 'Software Engineering Intern',
			keyRoles: [
				'Worked on the Medicare Pricing System Modernization (MPSM) Project',
				'Contributed to documentation and organization items',
				'Worked with teams spanning multiple companies.'
			],
			timeline: 'July 2022 - August 2022',
			skills: ['Java', 'Agile', 'Confluence'],
			references: [
				{
					name: 'Marion Haas',
					title: 'MPSM Project Manager',
					email: 'marion.sa.haas@gmail.com'
				},
				{
					name: 'Brendan Martin',
					title: 'MPSM Scrum Master and Delivery Manager',
					email: 'bmartin@bellese.io'
				},
				{
					name: 'Pere Ozogu',
					title: 'Full-Stack Software Engineer',
					email: 'pozogu@bellese.io'
				}
			]
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
			references: [
				{
					name: 'Adam Nash',
					title: 'Owner',
					email: 'adam@smr.llc'
				}
			]
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
