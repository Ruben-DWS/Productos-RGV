import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Categoria } from '../modelos/categoria';

@Injectable({
  providedIn: 'root'
})
export class ObtenercategoriaService {

  private httpclient = inject(HttpClient);

  categoria: Categoria[]=[];


  constructor() {
    this.getCategoria();
  }


   getCategoria(){

    return this.httpclient.request<Categoria[]>('GET','http://localhost:3000/categoria',{responseType:'json'})

   }
}
