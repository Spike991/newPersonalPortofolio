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
    'Security Management', 'Entrepreneur', 'Software Engineering', 'Cyber Security', 'IT Consulting'
  ];

  projects = [
    {
      title: 'Git Management Infrastructure project',
      description: 'A repository management system that allows users to manage their Git repositories efficiently.',
      techStack: ['Shell', 'Bash', 'Git'],
      link: 'https://github.com/Spike991/Git_Workflow_Infrastructure'
    },
    {
      title: 'Triangle Solver',
      description: 'A application that calculates how many blocks it takes to build an triangle. ',
      techStack: ['Java'],
      link: 'https://github.com/Spike991/TriangleSolver'
    },
    {
      title: 'Hackathons and CTFs Experience Lists',
      description: "It's a list about all the CTFs and Hackathons I've participated in.",
      techStack: ['Kali Linux', 'Cryptography', 'Web-Security', 'IT-Forensics', 'Reverse-Engineering', 'Binary Exploitation', 'AI-Security'],
      link: 'https://github.com/Spike991/Hackathon_CTFs_List'
    }
  ];
}
