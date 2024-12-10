import { Injectable } from '@angular/core';
import { Producto } from '../modelos/producto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AñadirproductoService {

  private apiUrl = 'http://localhost:3000/productos';  // URL del servicio JSON

  constructor(private http: HttpClient) { }

  anyadirProducto(producto: Producto): Observable<Producto> {
    // Enviamos el producto sin el 'id', ya que el servidor lo generará
    return this.http.post<Producto>(this.apiUrl, producto);
  }
 
}
