import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import {APP_ROUTING} from './app.routes';

// Servicios
import { BaresService} from './servicios/bares.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { CuponesComponent } from './components/cupones/cupones.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BarComponent } from './components/bar/bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ReservasComponent,
    CuponesComponent,
    FavoritosComponent,
    ProfileComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    BaresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
