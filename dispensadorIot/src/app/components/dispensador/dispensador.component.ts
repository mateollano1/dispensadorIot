import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PetserviceService } from '../../services/petservice.service';



@Component({
  selector: 'app-dispensador',
  templateUrl: './dispensador.component.html',
  styleUrls: ['./dispensador.component.css']
})
export class DispensadorComponent implements OnInit {
  usuario: any;
  sirve: boolean = false;
  foto: boolean = false;
  video: boolean = false;
  valorServido: any;
  alimentoNoti: boolean = false;
  fotoNoti: boolean = false;
  cargando: boolean = false;
  cargandoVideo: boolean = false;
  cargando2: boolean = false;
  urlfoto: string;
  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private pet: PetserviceService) {
    route.params.subscribe((user: any) => {
      this.usuario = user['user'];
      console.log(`hola ${user['user']}`)
    });
  }

  servir() {
    this.foto = false;
    this.video = false;
    this.sirve = true;
    this.alimentoNoti = false;
    this.fotoNoti = false;
  }
  tomarF() {
    this.video = false;
    this.sirve = false;
    this.foto = true;
    this.alimentoNoti = false;
    this.fotoNoti = false;
  }
  tomarV() {
    this.sirve = false;
    this.foto = false;
    this.video = true;
    this.alimentoNoti = false;
    this.fotoNoti = false;
  }
  servirAlimento(valor: string) {
    console.log(valor);
    this.valorServido = valor;
    this.sirve = false;
    this.alimentoNoti = true;

  }
  tomarFoto() {

    this.foto = false;
    this.cargando = true;
    this.pet.getimage().subscribe(param => {
      console.log(param);
      this.urlfoto = this.pet.link;
      this.cargando = false;
      this.fotoNoti = true;
    });
  }
  tomarVideo() {
    this.video = false;
    this.cargando2 = true;
    this.cargando = true;
    this.pet.getVideo().subscribe(param => {
      console.log(param);
      this.urlfoto = this.pet.link;
      this.cargando2 = false;
      this.cargando = false;
      this.cargandoVideo = true;
    });
  }
  ngOnInit() {
  }

}
