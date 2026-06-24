import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.html',
  styleUrl: './brands.scss'
})
export class Brands {
  logos = [
    { src: 'logos/Accenture.png',     alt: 'Accenture' },
    { src: 'logos/KOF.png',           alt: 'KOF' },
    { src: 'logos/Santander.png',     alt: 'Santander' },
    { src: 'logos/ia-interactive.svg', alt: 'iA Interactive' },
    { src: 'logos/Cinepolis.png',      alt: 'Cinépolis' },
  ];
}
