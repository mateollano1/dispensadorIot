import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PetserviceService } from '../../services/petservice.service';
import { Router } from '@angular/router';



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
  fotos: any[] = [];
  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private pet: PetserviceService,
    private router: Router) {
    route.params.subscribe((user: any) => {
      this.usuario = user['user'];
      console.log(`hola ${user['user']}`)
      pet.entregarUsuario(user['user']);
    });
  }

  servir() {
    this.foto = false;
    this.video = false;
    this.sirve = true;
    this.alimentoNoti = false;
    this.fotoNoti = false;
    this.cargandoVideo = false;
  }
  tomarF() {
    this.video = false;
    this.sirve = false;
    this.foto = true;
    this.alimentoNoti = false;
    this.fotoNoti = false;
    this.cargandoVideo = false;
  }
  tomarV() {
    this.sirve = false;
    this.foto = false;
    this.video = true;
    this.alimentoNoti = false;
    this.fotoNoti = false;
    this.cargandoVideo = false;
  }
  servirAlimento(valor: string) {
    this.pet.servirAlimento().subscribe();
    console.log(valor);
    this.valorServido = valor;
    this.sirve = false;
    this.alimentoNoti = true;
    this.cargandoVideo = false;
    

  }
  tomarFoto() {

    this.foto = false;
    let pos;
    this.cargando = true;
    this.pet.getimage().subscribe((param: any) => {

      this.fotos = param;
      console.log(this.fotos['imagenes']);
      this.urlfoto = this.pet.link + `/imagen/${this.fotos['imagenes']}`;
      this.cargando = false;
      this.fotoNoti = true;
    });
    this.urlfoto = "";
  }
  tomarVideo() {
    this.video = false;
    this.cargando2 = true;
    this.cargando = true;
    this.pet.getVideo().subscribe((param: any) => {
      console.log(param);
      setTimeout(() => {
        console.log(this.pet.link + `/video/${param['idvideo']}`);
        this.urlfoto = this.pet.link + `/video/${param['idvideo']}`;
        this.cargando2 = false;
        this.cargando = false;
        this.cargandoVideo = true;

      },
        5000);

    });
    this.urlfoto = "";
  }
  verFotos() {
    this.router.navigate(['/fotos']);
  }
  verVideos() {
    this.router.navigate(['/videos']);
  }
  ngOnInit() {
  }

}
