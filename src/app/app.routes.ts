import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoproductoComponent } from './listadoproducto/listadoproducto.component';
import { AnyadirproductoComponent } from './anyadirproducto/anyadirproducto.component';

export const routes: Routes = [

    {path: '', component: InicioComponent},
    {path: 'listado', component: ListadoproductoComponent},
    {path: 'añadir', component:AnyadirproductoComponent}

];
