import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Brands } from '../../components/brands/brands';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Brands, Contact],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-brands></app-brands>
    <app-contact></app-contact>
  `
})
export class Home {}
