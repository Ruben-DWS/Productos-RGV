import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root',
})
export class ObtenerproductosService {
  private httpclient = inject(HttpClient);

  private productos: Producto[] = [];
  private categoriaSeleccionada: string | null = null; // Almacena la categoría seleccionada

  constructor() {}

  /**
   * Obtiene todos los productos desde el servidor.
   */
  getProductos(): Observable<Producto[]> {
    return this.httpclient.get<Producto[]>('http://localhost:3000/productos');
  }

  /**
   * Guarda los productos para filtrar posteriormente.
   */
  setProductos(productos: Producto[]) {
    this.productos = productos;
  }

  /**
   * Establece la categoría por la cual se quieren filtrar los productos.
   * @param categoria La categoría seleccionada.
   */
  setCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  /**
   * Filtra productos por la categoría seleccionada.
   * @returns Un array con los productos filtrados.
   */
  filtrarPorCategoria(): Producto[] {
    if (!this.categoriaSeleccionada) {
      return this.productos; // Si no hay categoría seleccionada, devuelve todos los productos
    }
    return this.productos.filter(
      (producto) => producto.categoria === this.categoriaSeleccionada
    );
  }
}
