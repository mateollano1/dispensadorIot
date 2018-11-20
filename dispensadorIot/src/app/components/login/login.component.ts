import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  obtenerInformacion (usuario: string, constrasena: string) {
    this.user = usuario;
    console.log(usuario + constrasena);
    
    this.router.navigate(['/dispensador',usuario]);
  }

}
