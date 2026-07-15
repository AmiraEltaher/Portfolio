import { Component } from '@angular/core';
import { SkillCardComponent } from "../../shared/components/skill-card/skill-card.component";
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SkillCardComponent,NgFor,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
skills = [
  'Angular',
  'React',
  'Laravel',
  'TypeScript'
];
}
