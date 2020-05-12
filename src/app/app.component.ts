import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router } from '@angular/router';
import { RepAudio } from './clases/rep-audio';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  rep:RepAudio = new RepAudio()
    showSplash = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private route : Router
  ) {
    this.rep.reproducir('../assets/sounds/inicio-metegol.mp3')
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();

      setTimeout(() => {
        this.showSplash = false;
        this.route.navigate(['login']);
      }, 3000); 
    });
  }
}
