import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DispensadorComponent } from './components/dispensador/dispensador.component';
import { rutas } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DispensadorComponent
  ],
  imports: [
    BrowserModule,
    rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
