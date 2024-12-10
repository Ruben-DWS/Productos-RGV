import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../modelos/categoria';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnyadircategoriaService {

  private url = "http://localhost:3000/categoria";

  constructor(private http: HttpClient) {}

  

  anyadirCategoria(categoria: Categoria): Observable<Categoria>{

    return this.http.post<Categoria>(this.url ,categoria);

  }
}
