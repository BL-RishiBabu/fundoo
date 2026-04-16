import { Routes } from '@angular/router';
import { Registration } from './pages/registration/registration';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { AuthGuard } from './services/authGuard/auth-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/registration',
        pathMatch: 'full'
    },
    {
        path: 'registration',
        component: Registration
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'dashboard',
        component: Dashboard,
        // canActivate: [AuthGuard]
    }
];
