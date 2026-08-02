import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent,NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects:Project[] = [
    {
      id :1,
      title:"Dishcovery",
      description:"A responsive restaurant discovery web application built with Angular and TheMealDB API.",
      technologies:["Angular", "TypeScript", "bootstrap"],
      image:"assets/dishcovery.jpg",
      githubLink:"https://github.com/AmiraEltaher/Dishcovery",

    },
      {
      id :2,
      title:"Car Rent Agent",
      description:"A car rental management system developed with Laravel for booking and vehicle management.",
      technologies:["Laravel"],
      image:"assets/car.webp",
      githubLink:"https://github.com/AmiraEltaher/UN-level-2-Laravel-final-project",

    },

  ];

}
