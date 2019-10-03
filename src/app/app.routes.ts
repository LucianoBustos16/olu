import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CuponesComponent} from './components/cupones/cupones.component';
import {FavoritosComponent} from './components/favoritos/favoritos.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ReservasComponent} from './components/reservas/reservas.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cupones', component: CuponesComponent },
    { path: 'favoritos', component: FavoritosComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'reservas', component: ReservasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
