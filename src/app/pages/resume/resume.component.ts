import { Component, OnInit } from '@angular/core';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'coop-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css'],
    standalone: false
})
export class ResumeComponent implements OnInit {
  faLaptopCode = faLaptopCode
  constructor() { }

  ngOnInit(): void {
  }

}
