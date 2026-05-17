import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MatrixBackgroundComponent } from './matrix-background/matrix-background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatrixBackgroundComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Replace these with your actual details
  name = 'Alessio Cerullo';
  role = 'Cyber Security Specialist';
  aboutText = 'I protect digital infrastructures, assess vulnerabilities, and build security strategies that keep organizations one step ahead of threats. Specialized in penetration testing, risk management, and security consulting.';
  skills = [
    'Wireshark', 'NMap', 'Burp Suite', 'Angular' , 'Git', 'Java', 'C'
  ];

  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A fully responsive online store built with Angular and a Node.js backend. Features SSR for SEO optimization.',
      techStack: ['Angular', 'Express', 'MongoDB', 'SCSS'],
      link: 'https://github.com/yourusername/project1'
    },
    {
      title: 'Triangle Solver',
      description: 'A application that solves ',
      techStack: ['Java', 'Github', 'Firebase', 'Tailwind'],
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
