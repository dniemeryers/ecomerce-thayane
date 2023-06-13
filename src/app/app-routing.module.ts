import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full' },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  

  // lazy loading
  {path: 'produto',
  loadChildren:() => import('./features/produto/produto.module').then(m =>m.ProdutoModule)},
   
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
