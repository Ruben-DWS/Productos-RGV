import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core'; 
import { ObtenercategoriaService } from '../servicios/obtenercategoria.service';
import { Categoria } from '../modelos/categoria';
import { FormsModule, NgForm } from '@angular/forms';
import { AñadirproductoService } from '../servicios/añadirproducto.service';
import { Producto } from '../modelos/producto';
import { AnyadircategoriaService } from '../servicios/anyadircategoria.service';


@Component({
  selector: 'app-anyadirproducto',
  standalone: true,
  imports: [RouterLink, MatFormFieldModule, MatOptionModule, MatSelectModule,FormsModule],
  templateUrl: './anyadirproducto.component.html',
  styleUrl: './anyadirproducto.component.css'
  
})
export class AnyadirproductoComponent {

    private httpClient = inject(ObtenercategoriaService);
    private añadirproductoService = inject(AñadirproductoService);
    private anyadircategoria = inject(AnyadircategoriaService);

  

    categoria: Categoria[]=[];
    producto: Producto = {} as Producto;
    category: Categoria= {} as Categoria;




    constructor(){
      this.getCategoria();
    }


    getCategoria(){
      this.httpClient.getCategoria().subscribe(resp =>{
        this.categoria = resp;
        console.log(resp);
      })
    }


    anyadirProducto(form: NgForm) {
      // Enviamos el producto sin el 'id', ya que el servidor lo generará
      this.añadirproductoService.anyadirProducto(this.producto).subscribe(response => {
        console.log('Producto añadido correctamente:', response);
        // La respuesta contiene el producto con el 'id' autogenerado
        this.producto = response;  // Actualizamos el producto con el 'id' recibido
        // Lógica posterior, como limpiar el formulario o redirigir al usuario
        
        form.reset();
      
        
      });
    }

   anyadirCategoria(form: NgForm){

      this.anyadircategoria.anyadirCategoria(this.category).subscribe(reponse => {

        this.category = reponse;
        
        form.reset();

      });


   } 
}
