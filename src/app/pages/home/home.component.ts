import { Component } from '@angular/core';
import { SkillCardComponent } from "../../shared/components/skill-card/skill-card.component";
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SkillCardComponent,NgFor,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // hero section
  name = "Amira";
  title ="Full Stack Developer";
  description = "Passionate about building modern web applications using Laravel and Angular.";
 initials ="AE";

// skills
  skills = [
  'Angular',
  'React',
  'Laravel',
  'TypeScript'
];
}
