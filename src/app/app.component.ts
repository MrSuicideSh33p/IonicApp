import { Component } from '@angular/core';
import { Platform, Form } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RootPage } from '../pages/Root/Root';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = RootPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
