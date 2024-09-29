import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs'; 
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioActualizar= new Subject<Usuario[]>();

  private url: string = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url); // Retornar el Observable
  }
  eliminar(id: number){
   return this.http.delete(`${this.url}/${id}`);

  }
  editar(usuario: Usuario){
   return this.http.put(this.url,usuario);

  }

  agregar(usuario: Usuario){
   return this.http.post(this.url,usuario);

  }

}
