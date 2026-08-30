import { Injectable } from '@angular/core';
import { Project } from '../../models/project';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor() { }

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

    getProjects(){
      return this.projects;
    }

    getProjectById(id:number){
        return this.projects.find((p)=> p.id === id)
    }
}
