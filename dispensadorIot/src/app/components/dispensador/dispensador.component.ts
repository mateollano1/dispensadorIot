import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


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
  constructor(private route: ActivatedRoute) {
    route.params.subscribe((user:any) => {
      this.usuario = user['user'];
      console.log(`hola ${user['user']}`)});
   }

   servir() {
    this.foto = false;
    this.video = false;
    this.sirve = true;
    this.alimentoNoti = false;
    this.fotoNoti = false;
   }
   tomarF(){
    this.video = false;
    this.sirve = false;
    this.foto = true;
    this.alimentoNoti = false;
    this.fotoNoti = false;
   }
   tomarV(){
    this.sirve = false;
    this.foto = false;
    this.video = true;
    this.alimentoNoti = false;
    this.fotoNoti = false;
   }
   servirAlimento (valor: string ) {
     console.log(valor);
     this.valorServido = valor;
     this.sirve = false;
     this.alimentoNoti = true;

   }
   tomarFoto() {
    this.fotoNoti = true;
    this.foto = false;
   }
  ngOnInit() {
  }

}
