import { Component } from '@angular/core';
import { Work } from '../../components/work/work';
import { Certifications } from '../../components/certifications/certifications';

@Component({
  selector: 'app-experiencia',
  imports: [Work, Certifications],
  template: `
    <app-work></app-work>
    <app-certifications></app-certifications>
  `
})
export class ExperienciaPage {}
