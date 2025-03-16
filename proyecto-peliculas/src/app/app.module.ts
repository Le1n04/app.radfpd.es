import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './components/listado-peliculas/listado-peliculas.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    DetallePeliculaComponent,
    FavoritosComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
