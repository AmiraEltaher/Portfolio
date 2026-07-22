import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  name = 'Amira Eltaher';
  title = 'Full-stack Developer';
  email = 'amiraeltaher2020@gmail.com';
  githubHandle = 'https://github.com//AmiraEltaher';
  linkedinHandle = 'https://www.linkedin.com/in/amira-eltaher-144b30114/';
  currentYear = new Date().getFullYear();

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
