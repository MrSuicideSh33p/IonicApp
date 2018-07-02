import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
// import { Page } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthProvider } from '../../providers/auth/auth';
export interface User{
  name: string;
  role: number;
}
@Component({
  selector: 'page-root',
  templateUrl: 'root.html',
})


export class RootPage {

  user={
  name: 'mvnath1998@gmail.com',
  pw: 'admin'
  };


  // tabsPage = TabsPage; (For moving to page)
// Validation Check 

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RootPage');
  
}
loginUser(){
this.authProvider.login(this.user.name,this.user.pw).then(success=>{
  if(success){
    this.navCtrl.setRoot(TabsPage);
}
}).catch(err=>{
  let alert=this.alertCtrl.create({
    title:'Login Failed',
    message: err,
    buttons: ['OK']
  });
  alert.present();
});
}

}
