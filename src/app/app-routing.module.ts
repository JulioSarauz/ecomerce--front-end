import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './rutas/login/login.component';
import { ClienteComponent } from './rutas/cliente/cliente.component';
import { InicioComponent } from './rutas/inicio/inicio.component';

const routes: Routes = [
  {
      path:'',
      pathMatch:'full',
      redirectTo:'login'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'cliente',
    component:ClienteComponent
  },
  {
    path:'inicio',
    component:InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
