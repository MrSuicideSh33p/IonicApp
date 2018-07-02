import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { StylingPage } from '../styling/styling';
import { CalendarPage } from '../calendar/calendar';
import { PdfPage } from '../pdf/pdf';
import { PdfProjectPage } from '../pdf-project/pdf-project';
import { Canvas2Page } from '../canvas2/canvas2';
import { DragnDropPage } from '../dragn-drop/dragn-drop';
import { QrcodePage } from '../qrcode/qrcode';
import { AutocompletePage } from '../autocomplete/autocomplete';
// import { LoginPage } from '../login/login';
import { FormPage } from '../form/form';
import { CsvPage } from '../csv/csv';
import { AwsPage } from '../aws/aws';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = StylingPage;
  tab5Root = CalendarPage;
  tab6Root = PdfPage;
  tab7Root = PdfProjectPage;
  tab8Root = DragnDropPage;
  tab9Root = Canvas2Page;
  tab10Root = QrcodePage;
  tab11Root = AutocompletePage;
  tab12Root = CsvPage;
  tab13Root = FormPage;
  tab14Root = AwsPage;

  
  constructor() {

  }
}
