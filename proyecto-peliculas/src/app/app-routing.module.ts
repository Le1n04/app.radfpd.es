import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPeliculasComponent } from './components/listado-peliculas/listado-peliculas.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: '', component: ListadoPeliculasComponent },
  { path: 'detalle/:id', component: DetallePeliculaComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
