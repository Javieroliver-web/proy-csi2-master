// vistas/detalle/detalle.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonplaceholderService } from '@shared/jsonplaceholder.service';
import { Foto } from '@shared/foto.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // [cite: 6, 47]
import { Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle',
  standalone: true,
  // Importa CommonModule y ReactiveFormsModule [cite: 47]
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './detalle.html',
  styleUrls: ['./detalle.css']
})
export class DetalleComponent implements OnInit {

  public foto$!: Observable<Foto>;
  public fotoForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private photoService: JsonplaceholderService,
    private fb: FormBuilder // Inyecta FormBuilder
  ) {
    // Inicializa el formulario reactivo [cite: 47]
    this.fotoForm = this.fb.group({
      title: ['', Validators.required], // [cite: 47]
      url: ['', Validators.required]   // [cite: 47]
    });
  }

  ngOnInit(): void {
    // Obtiene la foto usando el ID de la ruta [cite: 21, 44]
    this.foto$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id')); // Obtiene el :id
        return this.photoService.getFotoById(id); // [cite: 27, 44]
      })
    );

    // Suscribe para rellenar el formulario cuando lleguen los datos
    this.foto$.subscribe(foto => {
      if (foto) {
        // Rellena el formulario con los datos actuales
        this.fotoForm.patchValue({
          title: foto.title,
          url: foto.url
        });
      }
    });
  }

  guardarCambios(): void {
    if (this.fotoForm.valid) {
      // Muestra el valor actualizado en consola [cite: 48]
      console.log('Formulario guardado:', this.fotoForm.value);
      alert('Cambios (simulados) guardados en consola.');
    } else {
      console.error('El formulario no es válido.');
    }
  }
}