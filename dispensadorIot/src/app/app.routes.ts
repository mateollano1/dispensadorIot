import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispensadorComponent } from './components/dispensador/dispensador.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent  },
    { path: 'dispensador/:user', component: DispensadorComponent  },
    { path: '**', component: LoginComponent  },
];

export const rutas = RouterModule.forRoot(routes);