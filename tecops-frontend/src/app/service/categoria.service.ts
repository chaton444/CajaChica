import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Gasto } from '../model/gasto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private url: string = 'http://localhost:8080/categorias';

  constructor(private http: HttpClient) { }
  listar(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(this.url); // Retornar el Observable
  }
}


