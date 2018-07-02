import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController, } from 'ionic-angular';

/**
 * Generated class for the StylingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-styling',
  templateUrl: 'styling.html',
})
export class StylingPage {

  fname:any;
  lname:any;
  subject:any;
  country:any;
  User="Codename";
  changeUser(ev){
    this.User=ev.target.value;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadCtrl: LoadingController) {
  }

Submit(){
  var load = this.loadCtrl.create({ content: this.fname+' '+ this.lname+' of '+ this.country+' says, '+this.subject, duration: 3000 });
  // var load1 = this.loadCtrl.create({content: this.lname,duration:1000});
  // var load2 = this.loadCtrl.create({content:this.subject,duration:4000});
  load.present();
  // setTimeout(() => {
  //   loading.dismiss();
  // }, 5000);
  // load1.present();
  // load2.present();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StylingPage');
  }

}
