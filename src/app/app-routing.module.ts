import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  { path: 'splash', loadChildren: () => import('./app.component').then( m => m.AppComponent)},
  {
    path: 'home-usuarios',
    loadChildren: () => import('./home-usuarios/home-usuarios.module').then( m => m.HomeUsuariosPageModule)
  },
  {
    path: 'listado-partidos',
    loadChildren: () => import('./components/listado-partidos/listado-partidos.module').then( m => m.ListadoPartidosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'partido',
    loadChildren: () => import('./components/partido/partido.module').then( m => m.PartidoPageModule)
  },
  {
    path: 'top-jugadores',
    loadChildren: () => import('./components/top-jugadores/top-jugadores.module').then( m => m.TopJugadoresPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
