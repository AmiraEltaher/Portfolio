import { Component } from '@angular/core';
import { RouterLink,ActivatedRoute } from '@angular/router';
import { Project } from '../../models/project';
import { NgIf , NgFor} from '@angular/common';
import { ProjectServiceService } from '../../shared/service/project-service.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [RouterLink,NgIf,NgFor],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent {

  public constructor(private activatedRoute: ActivatedRoute,private projectService : ProjectServiceService) {}

  selectedProject = {} as Project | undefined;
  id: string | null = ''; // I can't define id as string only, as params.get() returns string or null if there is no id



  ngOnInit() {
    // this.activatedRoute.params.subscribe(params => {
    //   console.log(params['id']);
    // });
    /*
    using paramMap is more professional
   */
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      // this.selectedProject = this.projects.find((p) => p.id === Number(this.id));
      this.selectedProject = this.projectService.getProjectById(Number(this.id))

    });

    // console.log(selectedProject);
  }
}
