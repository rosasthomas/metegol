import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { RepAudio } from '../clases/rep-audio';

@Component({
  selector: 'app-home-usuarios',
  templateUrl: './home-usuarios.page.html',
  styleUrls: ['./home-usuarios.page.scss'],
})
export class HomeUsuariosPage implements OnInit {

  rep:RepAudio = new RepAudio()

  constructor(private route:Router) { }

  ngOnInit() {
  }

  cerrar(){
    this.loading();
    setTimeout(()=>{
      this.route.navigate(['login']);
      this.rep.reproducir('../../assets/sounds/logout-metegol.mp3')
    }, 2000);
  }

  loading(){
    $("#casa-usu").removeAttr('hidden')
    $(".backdrop").removeAttr('hidden');
    setTimeout(() => {
      $(".backdrop").attr('hidden', 'true');
      $("#casa-usu").attr('hidden', "true")
    }, 2000);
  }

  navegar(rute:string){
    this.loading();
    setTimeout(() => {
      this.route.navigate([rute])
      this.rep.reproducir('../../assets/sounds/transi-metegol.mp3')
    }, 2000);
  }

}
