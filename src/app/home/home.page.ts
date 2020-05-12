import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { RepAudio } from '../clases/rep-audio';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    rep:RepAudio = new RepAudio()

  constructor(private route: Router) {}

    cerrar(){
    this.loading();
    setTimeout(()=>{
      this.rep.reproducir('../../assets/sounds/logout-metegol.mp3')
      this.route.navigate(['login']);
    }, 2000);
  }

  loading(){
    $("#casa").removeAttr('hidden')
    $(".backdrop").removeAttr('hidden');
    setTimeout(() => {
      $(".backdrop").attr('hidden', 'true');
      $("#casa").attr('hidden', "true")
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
