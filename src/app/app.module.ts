import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormComponent } from '../components/app.form';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Md2Page } from '../pages/md2/md2';
import { PopoverPage } from '../pages/popover/popover';
import { StylingPage } from '../pages/styling/styling'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RootPage } from '../pages/Root/Root';
import { CalendarPage } from '../pages/calendar/calendar';
import { AuthProvider } from '../providers/auth/auth';
import { NgCalendarModule } from 'ionic2-calendar'; 
import { EventModalPage } from '../pages/event-modal/event-modal';
import { PdfPage } from '../pages/pdf/pdf';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';
import { PdfProjectPage } from '../pages/pdf-project/pdf-project';
import { CanvasPage } from '../pages/canvas/canvas';
import { Canvas2Page } from '../pages/canvas2/canvas2';
import { ChatRoomPage } from '../pages/chat-room/chat-room';
import { DragnDropPage } from '../pages/dragn-drop/dragn-drop';
import { DragulaModule } from 'ng2-dragula';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { RlTagInputModule } from 'angular2-tag-input';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { AutocompletePage } from '../pages/autocomplete/autocomplete';
import { FormPage } from '../pages/form/form';
import { CsvPage } from '../pages/csv/csv';

// import { SimpleFormComponent } from '../components/app.simpleform';
// import { ComplexFormComponent } from '../components/app.complexform';
// import { FormValidationComponent } from '../components/app.formvalidations';
// import { LoginPage } from '../pages/login/login';
// import { LoginComponent } from '../components/app.login';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = {url:'http://192.168.2.108:3001', options: {} }; 
// use this for chat
// const config: SocketIoConfig ={url:'http://192.168.2.108:5000', options: {} }; 
// Use for AWS Functionality 

import { AwsProvider } from '../providers/aws/aws';
import { AwsPage } from '../pages/aws/aws';
import{ Camera } from '@ionic-native/camera'
import { HostPage } from '../pages/host/host';
 
@NgModule({
  declarations: [
    MyApp,
    HostPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Md2Page,
    PopoverPage,
    StylingPage,
    RootPage, 
    CalendarPage,
    EventModalPage,
    PdfPage,
    PdfProjectPage,
    CanvasPage,
    Canvas2Page, 
    ChatRoomPage,
    DragnDropPage,
    QrcodePage,
    AutocompletePage,
    FormComponent,
    FormPage,
    CsvPage,
    AwsPage,
    HostPage,
    // LoginPage,
    // LoginComponent,
    // SimpleFormComponent,
    // ComplexFormComponent,
    // FormValidationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgxQRCodeModule,
    DragulaModule,
    NgCalendarModule,
    RlTagInputModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SocketIoModule.forRoot(config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CsvPage,
    AwsPage,
    AboutPage,
    ContactPage,
    HomePage,
    Md2Page,
     TabsPage,
    PopoverPage,
    StylingPage,
    CalendarPage,
    RootPage,
    EventModalPage,
    CanvasPage,
    PdfPage,
    PdfProjectPage,
    Canvas2Page,
    ChatRoomPage,
    DragnDropPage,
    QrcodePage,
    AutocompletePage,
    FormPage,
    FormComponent,
    HostPage,
    // LoginPage,
    // FormValidationComponent,
    // SimpleFormComponent,
    // ComplexFormComponent,
    // LoginComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    File, 
    FileOpener,
    BarcodeScanner,
    AwsProvider,
    Camera
  ]

})
export class AppModule { }