import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { UsComponent } from './pages/utilities/us/us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'us/:shortcode', component: RedirectComponent },
  { path: 'us', component: UsComponent, canActivate: [AuthGuard] },
];
