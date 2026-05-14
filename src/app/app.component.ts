import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrixBackgroundComponent } from './matrix-background/matrix-background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatrixBackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Replace these with your actual details
  name = 'Alessio Cerullo';
  role = 'Cyber Security Specialist';
  aboutText = 'I build accessible, responsive, and highly performant web applications. Currently focused on Angular and modern web technologies.';

  skills = [
    'Angular', 'TypeScript', 'SCSS', 'Node.js', 'Express', 'Git', 'Figma'
  ];

  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A fully responsive online store built with Angular and a Node.js backend. Features SSR for SEO optimization.',
      techStack: ['Angular', 'Express', 'MongoDB', 'SCSS'],
      link: 'https://github.com/yourusername/project1'
    },
    {
      title: 'Task Management Dashboard',
      description: 'A productivity app featuring drag-and-drop boards, real-time updates, and dark mode.',
      techStack: ['Angular', 'RxJS', 'Firebase', 'Tailwind'],
      link: 'https://github.com/yourusername/project2'
    },
    {
      title: 'Personal Portfolio',
      description: 'A fast, minimalist portfolio website using Angular Server-Side Rendering.',
      techStack: ['Angular', 'SCSS', 'Vite'],
      link: 'https://github.com/yourusername/project3'
    }
  ];
}
