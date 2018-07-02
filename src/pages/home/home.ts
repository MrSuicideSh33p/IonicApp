

import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ModalController, NavParams, ViewController } from 'ionic-angular';
import { Md2Page } from '../md2/md2';
//@Component({
//  selector: 'page-home',
//  templateUrl: 'home.html'
//})
//class homePage {

//constructor(public modalCtrl: ModalController) {

//}

//presentProfileModal() {
//  let profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
// profileModal.present();
//}

//}

//@Component({
//  selector: 'page-home',
//  templateUrl: 'home.html'
//})
//class Profile {

//constructor(params: NavParams) {
//console.log('UserId', params.get('userId'));
//}

//}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public loadCtrl: LoadingController, private modal: ModalController) { }

  button1() {

    var load = this.loadCtrl.create({ content: 'All good here.', duration: 3000 });
    load.present();
    // alert("Iron Man Programmed This Button");
  }

  button2() {
    alert("I'm a decoy button button");
  }

  button3() {
    alert("I am the button speaking. Careful, for I have been trained to kill you");
  }

  tapEvent(e) {
    console.log('event', e);
    // this.event=e.target.value;
  }
  
  Open() {
    const myModal = this.modal.create(Md2Page);
    myModal.present();
  }

}
