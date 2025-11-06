// projects/shared/src/lib/jsonplaceholder.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// CORRECCIÓN 1: La ruta debe ser local, ya que están en la misma carpeta
import { Foto } from './foto.interface'; 

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  private readonly API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getFotos(limit: number = 100, start: number = 0): Observable<Foto[]> {
    
    // CORRECCIÓN 2: Es "_start", no "cite_start"
    return this.http.get<Foto[]>(`${this.API_URL}/photos?_start=${start}&_limit=${limit}`);
  }

  getFotoById(id: number): Observable<Foto> {
    return this.http.get<Foto>(`${this.API_URL}/photos/${id}`);
  }
}