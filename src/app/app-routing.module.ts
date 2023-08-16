import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' }, // Ruta por defecto redirecciona a /users
  { path: 'Home', component: AppComponent },
  { path: 'users', component: UserListComponent }, // Ruta para listar usuarios
  { path: 'create-user', component: UserFormComponent }, // Ruta para crear usuarios
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'users' } // Ruta por defecto para cualquier otra ruta no encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
