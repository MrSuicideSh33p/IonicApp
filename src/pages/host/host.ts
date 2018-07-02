import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-host',
  templateUrl: 'host.html',
})
export class HostPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private platform: Platform) {
  }

  showPlatform() {
    let text = 'I run on: ' + this.platform.platforms();
    let alert = this.alertCtrl.create({
      title: 'My Home',
      subTitle: text,
      buttons: ['Ok']
    });
    alert.present();
  }
}
