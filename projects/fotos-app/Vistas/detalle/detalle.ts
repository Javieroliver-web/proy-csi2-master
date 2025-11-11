import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonplaceholderService } from '@shared/jsonplaceholder.service';
import { Foto } from '@shared/foto.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './detalle.html',
  styleUrls: ['./detalle.css']
})
export class DetalleComponent implements OnInit {

  public foto$!: Observable<Foto>;
  public fotoForm: FormGroup;
  public guardadoExitoso: boolean = false; // <-- 1. AÑADIR ESTA VARIABLE

  constructor(
    private route: ActivatedRoute,
    private photoService: JsonplaceholderService,
    private fb: FormBuilder 
  ) {
    
    this.fotoForm = this.fb.group({
      title: ['', Validators.required], 
      url: ['', Validators.required]   
    });
  }

  ngOnInit(): void {

    this.foto$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id')); 
        return this.photoService.getFotoById(id); 
      })
    );

    this.foto$.subscribe(foto => {
      if (foto) {
        this.fotoForm.patchValue({
          title: foto.title,
          url: foto.url
        });
      }
    });
  }

  guardarCambios(): void {
    if (this.fotoForm.valid) {
      console.log('Formulario guardado:', this.fotoForm.value);
      
      // 2. REEMPLAZAR EL ALERT NATIVO
      // alert('Cambios (simulados) guardados en consola.');
      
      // CON ESTA LÓGICA
      this.guardadoExitoso = true; 

      // Opcional: Ocultar el mensaje después de 3 segundos
      setTimeout(() => {
        this.guardadoExitoso = false;
      }, 3000);

    } else {
      console.error('El formulario no es válido.');
    }
  }
}