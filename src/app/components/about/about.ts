import { Component } from '@angular/core';

interface SkillGroup {
  label: string;
  chips: string[];
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

  frontendGroup: SkillGroup = {
    label: 'Mi Stack',
    chips: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Azure MSAL', 'JWT', 'HTML5', 'CSS3', 'SCSS', 'REST APIs', 'Angular Material'],
  };

  otherGroups: SkillGroup[] = [
    {
      label: 'Frameworks',
      chips: ['Angular', 'Vue', 'Node.js'],
    },
    {
      label: 'Librerías UI',
      chips: ['Angular Material', 'PrimeNG', 'Chart.js', 'GoJS', 'Bootstrap'],
    },
    {
      label: 'Estilos',
      chips: ['Tailwind', 'SCSS / SASS', 'Stylus', 'CSS3'],
    },
    {
      label: 'Integración',
      chips: ['REST APIs', 'MSAL', 'JWT', 'Swagger', 'JSON'],
    },
    {
      label: 'Herramientas',
      chips: ['Git', 'Azure DevOps', 'Jira', 'Figma', 'Adobe XD', 'Scrum'],
    },
  ];
}
