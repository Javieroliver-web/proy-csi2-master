import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../../../../../shared/src/lib/clientes-service';
import { Cliente } from '../../../../../../shared/src/lib/modelos/cliente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente-detalle',
  imports: [FormsModule],
  templateUrl: './cliente-detalle.html',
  styleUrl: './cliente-detalle.css'
})
export class ClienteDetalle implements OnInit {

  private activeRouter = inject(ActivatedRoute);
  private location = inject(Location);
  private clientesService = inject(ClientesService);

  clienteId: string | null = '';
  cliente: Cliente | null = null;
  tipo: string = 'de detalle';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.clienteId = this.activeRouter.snapshot.paramMap.get('id');
    this.cliente = this.clientesService.getClienteById(Number(this.clienteId));
  }
  goBack() {
    this.location.back();
  }
}
