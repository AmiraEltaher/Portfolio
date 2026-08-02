import { Component, Input } from '@angular/core';
import { Project } from '../../../models/project';
import { RouterLink , RouterLinkActive} from '@angular/router';
// import { NgFor } from '@angular/common';
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project!:Project;

}
