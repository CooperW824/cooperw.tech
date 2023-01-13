import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

interface project {
	mediaType: 'picture' | 'video';
	mediaSrc: string;
	title: string;
	description: string;
	codeLink: string;
	links?: link[];
}

interface link {
	href: string;
	text: string;
}

@Component({
	selector: 'coop-my-projects',
	templateUrl: './my-projects.component.html',
	styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {
	readonly projects: project[] = [
		{
			mediaType: 'picture',
			mediaSrc: '../../../assets/imgs/WFC_Circuit.png',
			title: 'Wave Function Collapse: Procedural Image Generation using Physics.',
			description:
				'An implementation of the Wave Function Collapse algorithm in Angular.',
			codeLink: 'https://github.com/CooperW824/wave-function-collapse',
			links: [
				{ href: '/home', text: 'Mess Around with the Web Project' },
				{ href: '/home', text: 'Original Algorithm by mgxmn' }
			]
		},
		{
			mediaType: 'picture',
			mediaSrc: '../../../assets/imgs/WFC_Circuit.png',
			title: 'Western Tech Data Tool: A Simpler way to Visualize Data.',
			description:
				'A data visualization and analysis tool built with Python and PyQT.',
			codeLink: 'https://github.com/CooperW824/WestenTechDataTool'
		},
		{
			mediaType: 'picture',
			mediaSrc: '../../../assets/imgs/WFC_Circuit.png',
			title: 'Pi-Day 2022: Three Algorithms to Aproximate Pi.',
			description: '3 Algoritims to calculate Pi.',
			codeLink: 'https://github.com/CooperW824/Pi-Day-Algorithms',
			links: [
				{
					href: '/home',
					text: 'Colliding Blocks Explainer by 3 Blue 1 Brown'
				}
			]
		},
		{
			mediaType: 'video',
			mediaSrc: '../../../assets/imgs/WFC_Circuit.png',
			title: 'OpenVaxx: An Award Ainning, Open-Source, Annonymous, and Secure, Vaccine Passport.',
			description: 'A Vaccine Passport',
			codeLink: 'https://github.com/CooperW824/OpenVaxx',
			links: [
				{
					href: '/home',
					text: 'See the Congressional App Challenge Article'
				}
			]
		},
		{
			mediaType: 'video',
			mediaSrc: '../../../assets/imgs/WFC_Circuit.png',
			title: 'Hobbits USB Reader: A tool to simplify reading from USB devices.',
			description: 'A USB developer tool',
			codeLink: 'https://github.com/Mahlet-Inc/hobbits'
		}
	];
	faLaptopCode = faLaptopCode;
	faGitHub = faGithub;
	constructor() {}

	ngOnInit(): void {}
}
