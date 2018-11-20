import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PetserviceService {
  public  link = "http://10.1.1.58:3000";
  constructor(private http: HttpClient) { }
  usuario: string ="";
  getimage () {
    console.log(`${this.link}/camara`);
    return this.http.get(`${this.link}/camara`);
  }
  getVideo () {
    console.log('entréV');
    return this.http.get(`${this.link}/grabarVideo`);
  }
  getImagenes () {
    return this.http.get(`${this.link}/imagen`);
  }
  entregarUsuario (user: string) {
    this.usuario = user;
  }
  obtenerUsuario () {
    return this.usuario;
  }
  getVideos() {
    return this.http.get(`${this.link}/video`);

  }

}
