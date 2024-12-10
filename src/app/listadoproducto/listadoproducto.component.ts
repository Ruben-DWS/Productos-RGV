import { Component, inject, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { Producto } from '../modelos/producto';
import { ObtenerproductosService } from '../servicios/obtenerproductos.service';
import { RouterLink } from '@angular/router';
import { ObtenercategoriaService } from '../servicios/obtenercategoria.service';
import { Categoria } from '../modelos/categoria';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-listadoproducto',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, RouterLink, MatCheckboxModule],
  templateUrl: './listadoproducto.component.html',
  styleUrls: ['./listadoproducto.component.css']
})
export class ListadoproductoComponent implements OnInit {
  private httpClient = inject(ObtenerproductosService);
  private httpCategoria = inject(ObtenercategoriaService);

  productos: Producto[] = []; // Todos los productos cargados
  productosFiltrados: Producto[] = []; // Productos a mostrar tras el filtrado
  categorias: Categoria[] = []; // Categorías disponibles
  categoriasSeleccionadas: string[] = []; // Categorías seleccionadas

  ngOnInit() {
    this.cargarProductos();
    this.cargarCategorias();
  }
  
  cargarProductos() {
    this.httpClient.getProductos().subscribe(
      (resp) => {
        this.productos = resp;
        this.productosFiltrados = [...this.productos]; // Inicializar productosFiltrados
        console.log('Productos cargados:', this.productos);
      },
      (error) => console.error('Error al cargar productos', error)
    );
  }
  

  cargarCategorias() {
    this.httpCategoria.getCategoria().subscribe(
      (resp) => {
        this.categorias = resp;
        console.log('Categorías cargadas:', this.categorias);
      },
      (error) => console.error('Error al cargar categorías', error)
    );
  }

  /**
   * Maneja la selección/deselección de categorías.
   * @param event Evento del checkbox.
   * @param categoria Categoría asociada al checkbox.
   */
  toggleCategoria(event: MatCheckboxChange, categoria: string) {
    if (event.checked) {
      this.categoriasSeleccionadas.push(categoria);
    } else {
      this.categoriasSeleccionadas = this.categoriasSeleccionadas.filter(
        (cat) => cat !== categoria
      );
    }
    this.filtrarProductos();
  }

  /**
   * Filtra los productos según las categorías seleccionadas.
   */
  filtrarProductos() {
    // Si no hay categorías seleccionadas, mostramos todos los productos
    if (this.categoriasSeleccionadas.length === 0) {
      this.productosFiltrados = [...this.productos]; // Copiar todos los productos
      return;
    }
  
    // Filtramos los productos según las categorías seleccionadas
    this.productosFiltrados = this.productos.filter((producto) =>
      this.categoriasSeleccionadas.includes(producto.categoria)
    );
  }
  
}
