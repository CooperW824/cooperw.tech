import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

interface project {
	mediaType: 'picture' | 'video';
	mediaSrc: string;
	mobileMediaSrc: string;
	title: string;
	description: string;
	codeLink: string;
	links?: link[];
	safeURL?: SafeUrl;
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
	constructor(private sanitizer: DomSanitizer) {}
	readonly projects: project[] = [
		{
			mediaType: 'video',
			mobileMediaSrc: '',
			mediaSrc: '',
			// @ts-ignore
			safeURL: this.sanitizer.bypassSecurityTrustResourceUrl(
				'https://www.youtube.com/embed/KoRHScBFKuc'
			),
			title: 'Authbear: A Simple, Secure, and Open-Source Authentication Service.',
			description: `Organize your TOTP codes into folders and quickly find them with a search bar.
			The codes are encrypted with AES-256, and stored only on your device.
			 Built with Nuxt3, TypeScript, and TailwindCSS. Built in collaboration with Erik Umble and Jamie Alfaro.`,
			codeLink: 'https://github.com/CooperW824/authbear',
			links: [
				{ href: 'https://authbear.org', text: 'Check out AuthBear' }
			]
		},
		{
			mediaType: 'picture',
			mediaSrc: '../../../assets/imgs/quikpak.png',
			mobileMediaSrc: '../../../assets/imgs/quikpak_mobile.png',
			title: 'Quikpak: A minimalist packing list for the web.',
			description: `A simple todo / packing list app for the web. 
			A simple app I made in a few hours to test the skills I learned at my internship with
			TechSlice and to explore per-user access in DynamoDB along with basic data relationship modeling.`,
			codeLink: 'https://github.com/CooperW824/quikpak',
			links: [
				{
					href: 'https://quikpak.cooperw.tech',
					text: 'Check it out on its website.'
				}
			]
		},
		{
			mediaType: 'picture',
			mediaSrc: '../../../assets/imgs/WFC_Circuit.png',
			mobileMediaSrc: '../../../assets/imgs/WFC_Circuit_Mobile.png',
			title: 'Wave Function Collapse: Procedural Image Generation using Physics.',
			description: `Using principles borrowed from quantum mechanics, Wave Function Collapse generates images by splitting up, and 
			recursively determining (collapsing) each chunk of an image based on the 
			value of the surrounding chunks.`,
			codeLink: 'https://github.com/CooperW824/wave-function-collapse',
			links: [
				{
					href: 'https://wfc.cooperw.tech',
					text: 'Mess Around with the Web Project'
				},
				{
					href: 'https://github.com/mxgmn/WaveFunctionCollapse',
					text: 'Original Algorithm by mgxmn'
				}
			]
		},
		{
			mediaType: 'picture',
			mobileMediaSrc: '../../../assets/imgs/WTDTMobile.png',
			mediaSrc: '../../../assets/imgs/WTDT.png',
			title: 'Western Tech Data Tool: A Simpler way to Visualize Data.',
			description: `A data visualization and analysis tool built with Python, PyQT, and Pandas. 
				I designed the tool to make it easier for students to make, analyze and save data charts.
				The tool is a work in progress, see the GitHub Page for updates.`,
			codeLink: 'https://github.com/CooperW824/WestenTechDataTool'
		},
		{
			mediaType: 'picture',
			mobileMediaSrc: '../../../assets/imgs/PiApproxMobile.png',
			mediaSrc: '../../../assets/imgs/PiApprox.png',
			title: 'Pi-Day 2022: Three Algorithms to Approximate Pi.',
			description: `
			The first algorithm checks whether random points are in a circle to find Pi.
			The second algorithm uses calculus to find the area of a semicircle with a radius equalling 1.
			The third algorithm uses the physics of colliding blocks to find Pi.`,
			codeLink: 'https://github.com/CooperW824/Pi-Day-Algorithms',
			links: [
				{
					href: 'https://youtu.be/jsYwFizhncE',
					text: 'Colliding Blocks Explainer by 3 Blue 1 Brown'
				}
			]
		},
		{
			mediaType: 'video',
			mobileMediaSrc: '',
			mediaSrc: '',
			// @ts-ignore
			safeURL: this.sanitizer.bypassSecurityTrustResourceUrl(
				'https://www.youtube.com/embed/t2nIKnYKtTw'
			),
			title: 'OpenVaxx: An Award Winning, Open-Source, Anonymous, and Secure, Vaccine Passport.',
			description: `A secure, anonymous, vaccine passport, that verifies someone's vaccination status
			 without disclosing their identity. The app won 1st place in the 2021 Congressional App Challenge in MD District 2.`,
			codeLink: 'https://github.com/CooperW824/OpenVaxx',
			links: [
				{
					href: 'https://www.congressionalappchallenge.us/21-md02/',
					text: 'See the Congressional App Challenge Article'
				}
			]
		},
		{
			mediaType: 'video',
			mobileMediaSrc: '',
			mediaSrc: '',
			// @ts-ignore
			safeURL: this.sanitizer.bypassSecurityTrustResourceUrl(
				'https://www.youtube.com/embed/eZGY9nt4B2k'
			),
			title: 'Hobbits USB Reader: A tool to simplify reading from USB devices.',
			description: `A plugin I wrote for Hobbits, a bitwise analysis tool in C++
			 with the Qt framework and libusb to read data from USB Devices for debugging
			 or exploration. The plugin is available by default on MacOS and Linux in the
			 latest build of Hobbits.`,
			codeLink: 'https://github.com/Mahlet-Inc/hobbits'
		}
	];
	faLaptopCode = faLaptopCode;
	faGitHub = faGithub;

	ngOnInit(): void {}
}
