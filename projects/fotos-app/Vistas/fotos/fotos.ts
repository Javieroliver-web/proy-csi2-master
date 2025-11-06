import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonplaceholderService } from '@shared/jsonplaceholder.service'; // Ajusta tu ruta
import { Foto } from '@shared/foto.interface'; // Ajusta tu ruta
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fotos.html',
  styleUrls: ['./fotos.css']
})
export class FotosComponent implements OnInit {

  // Aplica aquí la misma corrección '!' que en detalle.ts
  public fotos$!: Observable<Foto[]>;

  constructor(private photoService: JsonplaceholderService) { }

  ngOnInit(): void {
    // El componente SÓLO LLAMA al servicio.
    // La lógica de "_start" y "http.get" NO va aquí.
    this.fotos$ = this.photoService.getFotos(100, 0); 
  }
}