import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DispensadorComponent } from './components/dispensador/dispensador.component';
import { rutas } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FotosComponent } from './components/fotos/fotos.component';
import { VideosComponent } from './components/videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DispensadorComponent,
    FotosComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    rutas,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
