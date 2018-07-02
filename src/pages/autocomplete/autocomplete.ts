import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  selector: 'page-autocomplete',
  templateUrl: 'autocomplete.html',
})
export class AutocompletePage {
  topics = [];
  name: string;
  talks = [];
  preparedTags = [
    '#Ionic',
    '#Angular',
    '#Mobile',
  ]

  constructor(public navCtrl: NavController) {
  }

  addTalk(){
    this.talks.push({name: this.name, topics: this.topics});
  }

}
