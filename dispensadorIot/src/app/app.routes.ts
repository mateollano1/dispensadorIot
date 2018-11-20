import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispensadorComponent } from './components/dispensador/dispensador.component';
import { LoginComponent } from './components/login/login.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { VideosComponent } from './components/videos/videos.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent  },
    { path: 'dispensador/:user', component: DispensadorComponent  },
    { path: 'fotos', component: FotosComponent  },
    { path: 'videos', component: VideosComponent  },
    { path: '**', component: LoginComponent  },
];

export const rutas = RouterModule.forRoot(routes);