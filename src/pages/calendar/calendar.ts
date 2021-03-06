import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { EventModalPage } from '../event-modal/event-modal';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  type: any = 'month';
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
  calendar = {
    mode: this.type,
    currentDate: this.selectedDay

  }


  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController) {
  }

  changeFormat(type) {
    
    this.calendar = {
      mode: type,
      currentDate: this.selectedDay
  
    }
  }

  addEvent() {
    let modal = this.modalCtrl.create(EventModalPage, { selectedDay: this.selectedDay });
    modal.present();

    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;

        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);

        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events; //To update immediately
        });
      }
    });
  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
  onViewSelected(event) {

  }
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    let alert = this.alertCtrl.create({
      title: ' ' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    });
    alert.present();


  }

}
