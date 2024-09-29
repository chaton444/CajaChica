import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs'; // Importar Observable
import { Gasto } from '../model/gasto';


@Injectable({
  providedIn: 'root'
})
export class GastoService {
  private url: string = 'http://localhost:8080/gastos';

  gastoActualizar= new Subject<Gasto[]>();


  constructor(private http: HttpClient) { }

  listar(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(this.url); // Retornar el Observable
  }
  eliminar(id: number){
   return this.http.delete(`${this.url}/${id}`);

  }
  editar(gasto: Gasto){
   return this.http.put(this.url,gasto);

  }

  agregar(gasto: Gasto){
   return this.http.post(this.url,gasto);

  }
}
