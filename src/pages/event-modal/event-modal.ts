import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
// import { IonicPage} from 'ionic-angular';
import * as moment from 'moment';
//import { CalendarPage } from '../calendar/calendar';

// @IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage {
    event={startTime: new Date().toISOString(), endTime:new Date().toISOString(),allDay:false}
    minDate=new Date().toISOString();

    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
      let preselectedDate=moment(this.navParams.get('SelectedDay')).format();
      this.event.startTime=preselectedDate;
      this.event.endTime=preselectedDate;
  }

save() {
  this.viewCtrl.dismiss(this.event);
}  
  }

