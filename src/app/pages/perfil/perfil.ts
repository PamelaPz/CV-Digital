import { Component } from '@angular/core';
import { About } from '../../components/about/about';

@Component({
  selector: 'app-perfil',
  imports: [About],
  template: `<app-about></app-about>`
})
export class PerfilPage {}
