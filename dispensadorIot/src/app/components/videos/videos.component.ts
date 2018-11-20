import { Component, OnInit } from '@angular/core';
import { PetserviceService } from '../../services/petservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: any [] = [];
  url;
  constructor(private pet: PetserviceService,
              private router: Router) {
    pet.getVideos().subscribe((param: any)=> {
      this.url = pet.link;
      this.videos = param['videos'];
      console.log(this.videos);
    });
   }
   regresar () {
    let us =this.pet.obtenerUsuario();
    this.router.navigate(['/dispensador',us]);
  }
  ngOnInit() {
  }

}
