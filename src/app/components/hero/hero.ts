import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Stat {
  label: string;
  num: string;
  sub: string;
}

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  stats: Stat[] = [
    { label: 'Experiencia', num: '5+ años', sub: 'desarrollo frontend' },
    { label: 'Stack actual', num: 'Angular 19', sub: 'TypeScript · RxJS' },
    { label: 'Proyectos', num: '8+', sub: 'en producción' },
    { label: 'Sectores', num: '4', sub: 'banca · consumo masivo · entretenimiento · marketing' },
  ];
}
