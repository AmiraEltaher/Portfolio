import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { NgFor } from '@angular/common';

import { ProjectServiceService } from '../../shared/service/project-service.service';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent,NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor ( private projectService:ProjectServiceService){}

  projects = this.projectService.getProjects();
}
