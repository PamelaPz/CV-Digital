import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, Contact],
  template: `
    <app-hero></app-hero>
    <app-contact></app-contact>
  `
})
export class Home {}
