import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'page-dragn-drop',
  templateUrl: 'dragn-drop.html',
})
export class DragnDropPage {
  q1 = [];
  q2 = [];

  constructor(private navController: NavController, public alertCtrl: AlertController, private dragulaService: DragulaService) {
    for (var i = 0; i < 20; i++) {
      this.q1.push("Array 1 (" + i + ")");
      this.q2.push("Array 2 (" + i + ")");
    }

    dragulaService.drop.subscribe((value) => {
      let alert = this.alertCtrl.create({
        title: 'Item moved',
        buttons: ['OK']
      });
      alert.present();
    });
  }

}
