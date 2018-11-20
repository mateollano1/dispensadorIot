import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PetserviceService } from '../../services/petservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  fotos: any [] = [];
  ruta;
  constructor( private http: HttpClient,
              private pet: PetserviceService,
              private router: Router, 
              ) {
                this.pet.getImagenes().subscribe((param: any) => {
                  this.fotos = param['imagenes'].reverse();
                  this.ruta = pet.link;
                  console.log(this.fotos);
                });
               }
  regresar () {
    let us =this.pet.obtenerUsuario();
    this.router.navigate(['/dispensador',us]);
  }
  ngOnInit() {
  }

}
