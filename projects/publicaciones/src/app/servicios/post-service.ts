import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../modelos/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    
  private url = 'https://jsonplaceholder.typicode.com';
  tablaURL = '';

  private http = inject(HttpClient);


  getItems<T>(tabla: string): Observable<T[]> {
    return this.http.get<T[]>(this.url + '/' + tabla);
  }

  getItem<T>(tabla: string, id: number): Observable<T> {
    return this.http.get<T>(`${this.url}/${tabla}/${id}`);
  }

  createItem<T>(tabla: string, objeto: T): Observable<T> {
    return this.http.post<T>(`${this.url}/${tabla}`, objeto);
  }

}
