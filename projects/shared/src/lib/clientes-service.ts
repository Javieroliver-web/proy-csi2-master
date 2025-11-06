import { Injectable } from '@angular/core';

const CLIENTES = [
  { id: 1, nombre: 'Cliente 1' },
  { id: 2, nombre: 'Cliente 2' },
  { id: 3, nombre: 'Cliente 3' }
];

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  getClientes() {
    return CLIENTES;
  }

  getClienteById(id: number) {
    return CLIENTES.find(cliente => cliente.id === id) || null;
  }

}
