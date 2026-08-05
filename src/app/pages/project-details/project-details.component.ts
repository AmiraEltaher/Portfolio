import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../models/project';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent {
  selectedProject = {} as Project | undefined;
  id: string | null = ''; // I can't define id as string only, as params.get() returns string or null if there is no id

  projects: Project[] = [
    {
      id: 1,
      title: 'Dishcovery',
      description:
        'A responsive restaurant discovery web application built with Angular and TheMealDB API.',
      technologies: ['Angular', 'TypeScript', 'bootstrap'],
      image: 'assets/dishcovery.jpg',
      githubLink: 'https://github.com/AmiraEltaher/Dishcovery',
    },
    {
      id: 2,
      title: 'Car Rent Agent',
      description:
        'A car rental management system developed with Laravel for booking and vehicle management.',
      technologies: ['Laravel'],
      image: 'assets/car.webp',
      githubLink:
        'https://github.com/AmiraEltaher/UN-level-2-Laravel-final-project',
    },
  ];

  public constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.activatedRoute.params.subscribe(params => {
    //   console.log(params['id']);
    // });
    /*
    using paramMap is more professional
   */
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.selectedProject = this.projects.find((p) => p.id === Number(this.id));
    });

    // console.log(selectedProject);
  }
}
