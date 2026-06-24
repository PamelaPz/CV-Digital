import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  imports: [],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss'
})
export class Certifications {
  certs = [
    { name: 'Angular Developer', issuer: 'Certificates.dev', year: '2025' },
    { name: 'Microsoft Azure Fundamentals AZ-900', issuer: 'Microsoft', year: '2025' },
    { name: 'PCEP — Entry-Level Python', issuer: 'Python Institute', year: '2024' },
  ];
}
