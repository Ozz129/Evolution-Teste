import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './users/register/register.component'
import { LoginComponent } from './users/login/login.component'
import { DashboardComponent } from './tasks/dashboard/dashboard.component';
import { CreateComponent } from './tasks/create/create.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'createTask', component: CreateComponent},
  { path: '', component: LoginComponent}
];

export const routing = RouterModule.forRoot(routes);

