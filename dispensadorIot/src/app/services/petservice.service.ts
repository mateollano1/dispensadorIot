import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PetserviceService {
  public  link = "http://true.localtunnel.me";
  constructor(private http: HttpClient) { }
  
  getimage () {
    console.log(`${this.link}/camara`);
    return this.http.get(`${this.link}/camara`);
  }
  getVideo () {
    console.log('entréV');
    return this.http.get(`${this.link}/grabarVideo`);
  }
  
}
