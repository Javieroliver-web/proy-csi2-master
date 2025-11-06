import { Shared } from './../../../shared/src/lib/shared';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Articles } from '../../../shared/src/lib/articles';
import { Menu } from "./menu/menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Administración de artículos');

  articulosService = inject(Articles);
  articulos = this.articulosService.getArticulos();

}
