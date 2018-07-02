webpackJsonp([0],{

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Page } from 'ionic-angular';


var RootPage = /** @class */ (function () {
    // tabsPage = TabsPage; (For moving to page)
    // Validation Check 
    function RootPage(navCtrl, navParams, authProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.user = {
            name: 'mvnath1998@gmail.com',
            pw: 'admin'
        };
    }
    RootPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RootPage');
    };
    RootPage.prototype.loginUser = function () {
        var _this = this;
        this.authProvider.login(this.user.name, this.user.pw).then(function (success) {
            if (success) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
            }
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Login Failed',
                message: err,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    RootPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-root',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\Root\root.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>  \n  <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input floating type="text" [(ngModel)]="user.name"></ion-input>\n      </ion-item>\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input floating type="password" [(ngModel)]="user.pw"></ion-input>\n        </ion-item>\n        </ion-list>\n        <ion-card-content>\n          <button ion-button (click)="loginUser()">Login</button>\n<!--Button to traverse\n   <button [navPush]="tabsPage">Go!</button> -->\n</ion-card-content>\n\n<ion-card-content>\n  <br><br>\n  link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"\n  <br>Check this into the head of index.html for Form Page for format\n</ion-card-content>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\Root\root.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RootPage);
    return RootPage;
}());

//# sourceMappingURL=Root.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styling_styling__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_calendar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pdf_pdf__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pdf_project_pdf_project__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__canvas2_canvas2__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dragn_drop_dragn_drop__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__qrcode_qrcode__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__autocomplete_autocomplete__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__form_form__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__csv_csv__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__aws_aws__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// import { LoginPage } from '../login/login';



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__styling_styling__["a" /* StylingPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__calendar_calendar__["a" /* CalendarPage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_6__pdf_pdf__["a" /* PdfPage */];
        this.tab7Root = __WEBPACK_IMPORTED_MODULE_7__pdf_project_pdf_project__["a" /* PdfProjectPage */];
        this.tab8Root = __WEBPACK_IMPORTED_MODULE_9__dragn_drop_dragn_drop__["a" /* DragnDropPage */];
        this.tab9Root = __WEBPACK_IMPORTED_MODULE_8__canvas2_canvas2__["a" /* Canvas2Page */];
        this.tab10Root = __WEBPACK_IMPORTED_MODULE_10__qrcode_qrcode__["a" /* QrcodePage */];
        this.tab11Root = __WEBPACK_IMPORTED_MODULE_11__autocomplete_autocomplete__["a" /* AutocompletePage */];
        this.tab12Root = __WEBPACK_IMPORTED_MODULE_13__csv_csv__["a" /* CsvPage */];
        this.tab13Root = __WEBPACK_IMPORTED_MODULE_12__form_form__["a" /* FormPage */];
        this.tab14Root = __WEBPACK_IMPORTED_MODULE_14__aws_aws__["a" /* AwsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  \n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Styling" tabIcon="logo-sass"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="Calendar" tabIcon="calendar"></ion-tab>\n\n  <ion-tab [root]="tab6Root" tabTitle="PDF Downloader" tabIcon="cloud-download"></ion-tab>\n  \n  <ion-tab [root]="tab7Root" tabTitle="PDF Project" tabIcon="logo-codepen"></ion-tab>\n\n  <ion-tab [root]="tab8Root" tabTitle="DragnDrop" tabIcon="brush"></ion-tab>\n\n  <ion-tab [root]="tab9Root" tabTitle="Canvas2" tabIcon="brush"></ion-tab>\n\n  <ion-tab [root]="tab10Root" tabTitle="QRCode" tabIcon="qr-scanner"></ion-tab>\n\n  <ion-tab [root]="tab11Root" tabTitle="Autocomplete" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab12Root" tabTitle="CSV Data" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab13Root" tabTitle="Form" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab14Root" tabTitle="AWS" tabIcon="logo-codepen"></ion-tab>\n  \n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.searchQuery = '';
        this.initializeItems();
    }
    AboutPage.prototype.initializeItems = function () {
        this.items = [
            'Benjamin Tennyson',
            'Gwendolyn Tennyson',
            'Max Tennyson',
            'Kevin Ethan Levin'
        ];
    };
    AboutPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_room_chat_room__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, socket) {
        this.navCtrl = navCtrl;
        this.socket = socket;
        this.nickname = '';
    }
    ContactPage.prototype.joinChat = function () {
        this.socket.connect();
        //Next line for sending message to backend
        this.socket.emit('set-nickname', this.nickname);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat_room_chat_room__["a" /* ChatRoomPage */], { nickname: this.nickname });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\contact\contact.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        Join Chat\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n   \n\n  <ion-content padding>\n\n    <ion-item>\n\n      <ion-label stacked>Set Nickname</ion-label>\n\n      <ion-input type="text" [(ngModel)]="nickname" placeholder="Nickname"></ion-input>\n\n    </ion-item>\n\n    <button ion-button full (click)="joinChat()" [disabled]="nickname === \'\'">Join Chat as {{ nickname }}</button>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// @IonicPage()
var ChatRoomPage = /** @class */ (function () {
    function ChatRoomPage(navCtrl, navParams, socket, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socket = socket;
        this.toastCtrl = toastCtrl;
        this.messages = [];
        this.nickname = '';
        this.message = '';
        this.nickname = this.navParams.get('nickname');
        this.getMessages().subscribe(function (message) {
            _this.messages.push(message);
        });
        this.getUsers().subscribe(function (data) {
            var user = data['user'];
            if (data['event'] === 'left') {
                _this.showToast('User left: ' + user);
            }
            else {
                _this.showToast('User joined: ' + user);
            }
        });
    }
    ChatRoomPage.prototype.sendMessage = function () {
        this.socket.emit('add-message', { text: this.message });
        this.message = '';
    };
    ChatRoomPage.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatRoomPage.prototype.getUsers = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('users-changed', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatRoomPage.prototype.ionViewWillLeave = function () {
        this.socket.disconnect();
    };
    ChatRoomPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    ChatRoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat-room',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\chat-room\chat-room.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Chat\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <ion-grid>\n    <ion-row *ngFor="let message of messages">\n      \n      <ion-col col-9 *ngIf="message.from !== nickname" class="message" [ngClass]="{\'my_message\': message.from === nickname, \'other_message\': message.from !== nickname}">\n        <span class="user_name">{{ message.from }}:</span><br>\n        <span>{{ message.text }}</span>\n        <div class="time">{{message.created | date:\'dd.MM hh:MM\'}}</div>\n      </ion-col>\n \n      <ion-col offset-3 col-9 *ngIf="message.from === nickname" class="message" [ngClass]="{\'my_message\': message.from === nickname, \'other_message\': message.from !== nickname}">\n        <span class="user_name">{{ message.from }}:</span><br>\n        <span>{{ message.text }}</span>\n        <div class="time">{{message.created | date:\'dd.MM hh:MM\'}}</div>\n      </ion-col>\n \n    </ion-row>\n  </ion-grid>\n \n</ion-content>\n \n<ion-footer>\n  <ion-toolbar>\n    <ion-row class="message_row">\n      <ion-col col-9>\n        <ion-item no-lines>\n          <ion-input type="text" placeholder="Message" [(ngModel)]="message"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-button clear color="primary" (click)="sendMessage()" [disabled]="message === \'\'">\n        Send\n      </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\chat-room\chat-room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], ChatRoomPage);
    return ChatRoomPage;
}());

//# sourceMappingURL=chat-room.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__md2_md2__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//@Component({
//  selector: 'page-home',
//template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Modal</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <button ion-button (click)="Open()">Open Modal\n  </button>\n\n  <!-- Float the icon right\n  <button ion-button icon-right>\n    <ion-icon name="home">Home</ion-icon>\n  </button>\n-->\n  <!-- Only icon (no text) -->\n  <br>\n  <button ion-button icon-only>\n    <ion-icon name="home">Maou-Sama\n    </ion-icon>\n  </button>\n  <button (click)="button2()" ion-button full>Full Button</button>\n  <button ion-button (click)="button3()" block>Block Button</button>\n  <ion-item>\n    <ion-icon name="logo-facebook" item-start></ion-icon>\n    Followers\n    <ion-badge color="secondary" item-end>1.6b</ion-badge>\n  </ion-item>\n  <ion-item>\n    <ion-icon name="logo-twitter" item-start></ion-icon>\n    Followers\n    <ion-badge item-end>260k</ion-badge>\n  </ion-item>\n  <button (click)="button1()" ion-button color="secondary" outline>Secret Button</button>\n  <!--\n  <ion-header>\n      <ion-navbar>\n        <ion-buttons start>\n          <button ion-button icon-only>\n            <ion-icon name="contact"></ion-icon>\n          </button>\n        </ion-buttons>\n    \n        <ion-buttons end>\n          <button ion-button icon-only>\n            <ion-icon name="search"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    </ion-header>\n    \n  -->\n\n  <ion-list>\n    <ion-item>\n      Thanos tried to kill me\n      <button ion-button outline item-end icon-left>\n        <ion-icon name="star"></ion-icon>\n        Left Icon\n      </button>\n    </ion-item>\n  </ion-list>\n  <ion-card>\n\n    <ion-card-header>\n      What do you think I am? I am a card\n    </ion-card-header>\n\n    <ion-card-content>\n      <!-- Add card content here! -->\n      I used to be just plain text, but now, I\'m so much more\n    </ion-card-content>\n\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Explore Nearby\n    </ion-card-header>\n\n    <ion-list>\n      <button ion-item>\n        <ion-icon name="cart" item-start></ion-icon>\n        Wanna go shopping?\n      </button>\n\n      <button ion-item>\n        <ion-icon name="medical" item-start></ion-icon>\n        You sick?\n      </button>\n\n      <button ion-item>\n        <ion-icon name="cafe" item-start></ion-icon>\n        Let\'s get something to eat\n      </button>\n\n      <button ion-item>\n        <ion-icon name="paw" item-start></ion-icon>\n        Bow Wow\n      </button>\n\n      <ion-card>\n        <img src="../assets/imgs/nin-live.png" />\n        <ion-card-content>\n          <ion-card-title>\n            Well, Well, Well\n          </ion-card-title>\n          <p>\n            Well, it was nice when it finally worked.\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n  </ion-card>\n  <ion-card>\n    <!-- <img src="../assets/imgs/card-saopaolo.png"/> -->\n    <div class="card-title">São Paulo</div>\n    <div class="card-subtitle">41 Listings</div>\n  </ion-card>\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <!--supposed to be an avatar here:/-->\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>November 5, 1955</p>\n    </ion-item>\n\n    <ion-card-content>\n      <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!\n        Whoa. This is heavy.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>12 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>Centurion</div>\n        </button>\n      </ion-col>\n      <ion-col center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n  <ion-item>\n    <ion-label>Solo: A Star Wars Story</ion-label>\n    <ion-checkbox color="light" checked="false"></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Ant-Man and the Wasp</ion-label>\n    <ion-checkbox color="secondary" disabled="false"></ion-checkbox>\n  </ion-item>\n  <ion-card (tap)="tapEvent($event)">\n    <ion-item>\n      Tapped: {{tap}} times\n    </ion-item>\n  </ion-card>\n  <ion-content>\n    <!-- Real floating action button, fixed. It will not scroll with the content -->\n    <ion-fab top right edge>\n      <button ion-fab mini>\n        <ion-icon name="add"></ion-icon>\n      </button>\n      <ion-fab-list>\n        <button ion-fab>\n          <ion-icon name="logo-facebook"></ion-icon>\n        </button>\n        <button ion-fab>\n          <ion-icon name="logo-twitter"></ion-icon>\n        </button>\n        <button ion-fab>\n          <ion-icon name="logo-vimeo"></ion-icon>\n        </button>\n        <button ion-fab>\n          <ion-icon name="logo-googleplus"></ion-icon>\n        </button>\n      </ion-fab-list>\n    </ion-fab>\n  </ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        A lot of text and it will be separated into different columnsA lot of text and it will be separated into different columnsA\n        lot of text and it will be separated into different columnsA lot of text and it will be separated into different\n        columnsA lot of text and it will be separated into different columnsA lot of text and it will be separated into different\n        columns\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-icon ios="logo-apple" md="logo-android"></ion-icon>\n  <ion-item>\n    <ion-label fixed>Password</ion-label>\n    <ion-input floating type="password"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input floating type="password"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input type="text" placeholder="Username"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>User</ion-label>\n    <ion-input type="text"></ion-input>\n\n\n  </ion-item>\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/avatar-finn.png">\n      </ion-avatar>\n      <h2>Finn</h2>\n      <h3>Don\'t Know What To Do!</h3>\n      <p>I\'ve had a pretty messed up day. If we just...</p>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="img/slimer.png">\n        </ion-avatar>\n        <h2>Slimer</h2>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="primary">\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary">\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="primary">\n          <ion-icon name="mail"></ion-icon>\n          Email\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="img/thumbnail-totoro.png">\n      </ion-thumbnail>\n      <h2>My Neighbor Totoro</h2>\n      <p>Hayao Miyazaki • 1988</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <!--Toolbar\n                            <ion-menu [content]="content">\n                                <ion-header>\n                                  <ion-toolbar>\n                                    <ion-title>Menu</ion-title>\n                                  </ion-toolbar>\n                                </ion-header>\n                                <ion-content>\n                                  <ion-list>\n                                    <button ion-item (click)="openPage(homePage)">\n                                      Home\n                                    </button>\n                                    <button ion-item (click)="openPage(friendsPage)">\n                                      Friends\n                                    </button>\n                                    <button ion-item (click)="openPage(eventsPage)">\n                                      Events\n                                    </button>\n                                    <button ion-item (click)="closeMenu()">\n                                      Close Menu\n                                    </button>\n                                  </ion-list>\n                                </ion-content>\n                              </ion-menu>\n                              \n                              <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n                              -->\n  <ion-list radio-group>\n    <ion-list-header>\n      Language\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Go</ion-label>\n      <ion-radio checked="true" value="go"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Rust</ion-label>\n      <ion-radio value="rust"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Python</ion-label>\n      <ion-radio value="python" disabled="true"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <ion-item>\n    <ion-range [(ngModel)]="brightness">\n      <ion-icon range-left small name="sunny"></ion-icon>\n      <ion-icon range-right name="sunny"></ion-icon>\n    </ion-range>\n  </ion-item>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="kittens">\n        Kittens\n      </ion-segment-button>\n      <ion-segment-button value="puppies">\n        Puppies\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'puppies\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'kittens\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="img/thumbnail-kitten-1.jpg">\n        </ion-thumbnail>\n        <h2>Luna</h2>\n      </ion-item>\n\n    </ion-list>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label>Gaming</ion-label>\n      <ion-select [(ngModel)]="gaming">\n        <ion-option value="nes">NES</ion-option>\n        <ion-option value="n64">Nintendo64</ion-option>\n        <ion-option value="ps">PlayStation</ion-option>\n        <ion-option value="genesis">Sega Genesis</ion-option>\n        <ion-option value="saturn">Sega Saturn</ion-option>\n        <ion-option value="snes">SNES</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-label>Toppings</ion-label>\n      <ion-select [(ngModel)]="toppings" multiple="true" cancelText="Nah" okText="Okay!">\n        <ion-option value="bacon" selected="true">Bacon</ion-option>\n        <ion-option value="olives">Black Olives</ion-option>\n        <ion-option value="xcheese" selected="true">Extra Cheese</ion-option>\n        <ion-option value="peppers">Green Peppers</ion-option>\n        <ion-option value="mushrooms">Mushrooms</ion-option>\n        <ion-option value="onions">Onions</ion-option>\n        <ion-option value="pepperoni">Pepperoni</ion-option>\n        <ion-option value="pineapple">Pineapple</ion-option>\n        <ion-option value="sausage">Sausage</ion-option>\n        <ion-option value="Spinach">Spinach</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-slides pager>\n\n    <ion-slide style="background-color: green">\n      <h2>Slide 1</h2>\n    </ion-slide>\n\n    <ion-slide style="background-color: blue">\n      <h2>Slide 2</h2>\n    </ion-slide>\n\n    <ion-slide style="background-color: red">\n      <h2>Slide 3</h2>\n    </ion-slide>\n\n  </ion-slides>\n  <!--<ion-item>\n            <ion-label>Check out the right corner</ion-label>\n            <ion-toggle disabled="false"></ion-toggle>\n          </ion-item>\n          <ion-header>\n              <ion-toolbar>\n                <ion-title>Toolbar</ion-title>\n              </ion-toolbar>\n            </ion-header>\n          -->\n  <ion-content></ion-content>\n  <!--\n            <ion-footer>\n              <ion-toolbar>\n                <ion-title>Footer</ion-title>\n              </ion-toolbar>\n            </ion-footer>\n            <ion-header>\n                <ion-navbar color="dark">\n                  <ion-title>Dark</ion-title>\n                </ion-navbar>\n              </ion-header>\n              \n              \n              <ion-header>\n                <ion-navbar color="danger">\n                  <ion-title>Danger</ion-title>\n                </ion-navbar>\n              </ion-header>\n              \n              <ion-header>\n                <ion-navbar color="secondary">\n                  <ion-title>Secondary</ion-title>\n                </ion-navbar>\n              </ion-header>\n              -->\n  <ion-item>\n    <ion-label>Date</ion-label>\n    <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate">\n    </ion-datetime>\n  </ion-item>\n  <ion-tabs>\n    <ion-tab tabIcon="call" [root]="tabOne" tabBadge="3" tabBadgeStyle="danger"></ion-tab>\n    <ion-tab tabIcon="chatbubbles" [root]="tabTwo" tabBadge="14" tabBadgeStyle="danger"></ion-tab>\n    <ion-tab tabIcon="musical-notes" [root]="tabThree"></ion-tab>\n  </ion-tabs>\n  <!-- Segment in content -->\n  <ion-segment [(ngModel)]="relationship" color="primary" (ionChange)="segmentChanged($event)">\n    <ion-segment-button value="friends">\n      Friends\n    </ion-segment-button>\n    <ion-segment-button value="enemies">\n      Enemies\n    </ion-segment-button>\n  </ion-segment>\n  <ion-segment [(ngModel)]="icons" color="secondary">\n    <ion-segment-button value="camera">\n      <ion-icon name="camera"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="bookmark">\n      <ion-icon name="bookmark"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n  <!-- <form [formGroup]="myForm">\n    <ion-segment formControlName="mapStyle" color="danger">\n      <ion-segment-button value="standard">\n        Standard\n      </ion-segment-button>\n      <ion-segment-button value="hybrid">\n        Hybrid\n      </ion-segment-button>\n      <ion-segment-button value="sat">\n        Satellite\n      </ion-segment-button>\n    </ion-segment>\n  </form>-->\n</ion-content>'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\home\home.html"*/
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
//template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Modal</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <button ion-button (click)="Open()">Open Modal\n  </button>\n\n  <!-- Float the icon right\n  <button ion-button icon-right>\n    <ion-icon name="home">Home</ion-icon>\n  </button>\n-->\n  <!-- Only icon (no text) -->\n  <br>\n  <button ion-button icon-only>\n    <ion-icon name="home">Maou-Sama\n    </ion-icon>\n  </button>\n  <button (click)="button2()" ion-button full>Full Button</button>\n  <button ion-button (click)="button3()" block>Block Button</button>\n  <ion-item>\n    <ion-icon name="logo-facebook" item-start></ion-icon>\n    Followers\n    <ion-badge color="secondary" item-end>1.6b</ion-badge>\n  </ion-item>\n  <ion-item>\n    <ion-icon name="logo-twitter" item-start></ion-icon>\n    Followers\n    <ion-badge item-end>260k</ion-badge>\n  </ion-item>\n  <button (click)="button1()" ion-button color="secondary" outline>Secret Button</button>\n  <!--\n  <ion-header>\n      <ion-navbar>\n        <ion-buttons start>\n          <button ion-button icon-only>\n            <ion-icon name="contact"></ion-icon>\n          </button>\n        </ion-buttons>\n    \n        <ion-buttons end>\n          <button ion-button icon-only>\n            <ion-icon name="search"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    </ion-header>\n    \n  -->\n\n  <ion-list>\n    <ion-item>\n      Thanos tried to kill me\n      <button ion-button outline item-end icon-left>\n        <ion-icon name="star"></ion-icon>\n        Left Icon\n      </button>\n    </ion-item>\n  </ion-list>\n  <ion-card>\n\n    <ion-card-header>\n      What do you think I am? I am a card\n    </ion-card-header>\n\n    <ion-card-content>\n      <!-- Add card content here! -->\n      I used to be just plain text, but now, I\'m so much more\n    </ion-card-content>\n\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Explore Nearby\n    </ion-card-header>\n\n    <ion-list>\n      <button ion-item>\n        <ion-icon name="cart" item-start></ion-icon>\n        Wanna go shopping?\n      </button>\n\n      <button ion-item>\n        <ion-icon name="medical" item-start></ion-icon>\n        You sick?\n      </button>\n\n      <button ion-item>\n        <ion-icon name="cafe" item-start></ion-icon>\n        Let\'s get something to eat\n      </button>\n\n      <button ion-item>\n        <ion-icon name="paw" item-start></ion-icon>\n        Bow Wow\n      </button>\n\n      <ion-card>\n        <img src="../assets/imgs/nin-live.png" />\n        <ion-card-content>\n          <ion-card-title>\n            Well, Well, Well\n          </ion-card-title>\n          <p>\n            Well, it was nice when it finally worked.\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n  </ion-card>\n  <ion-card>\n    <!-- <img src="../assets/imgs/card-saopaolo.png"/> -->\n    <div class="card-title">São Paulo</div>\n    <div class="card-subtitle">41 Listings</div>\n  </ion-card>\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <!--supposed to be an avatar here:/-->\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>November 5, 1955</p>\n    </ion-item>\n\n    <ion-card-content>\n      <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!\n        Whoa. This is heavy.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>12 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>Centurion</div>\n        </button>\n      </ion-col>\n      <ion-col center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n  <ion-item>\n    <ion-label>Solo: A Star Wars Story</ion-label>\n    <ion-checkbox color="light" checked="false"></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Ant-Man and the Wasp</ion-label>\n    <ion-checkbox color="secondary" disabled="false"></ion-checkbox>\n  </ion-item>\n  <ion-card (tap)="tapEvent($event)">\n    <ion-item>\n      Tapped: {{tap}} times\n    </ion-item>\n  </ion-card>\n  <ion-content>\n    <!-- Real floating action button, fixed. It will not scroll with the content -->\n    <ion-fab top right edge>\n      <button ion-fab mini>\n        <ion-icon name="add"></ion-icon>\n      </button>\n      <ion-fab-list>\n        <button ion-fab>\n          <ion-icon name="logo-facebook"></ion-icon>\n        </button>\n        <button ion-fab>\n          <ion-icon name="logo-twitter"></ion-icon>\n        </button>\n        <button ion-fab>\n          <ion-icon name="logo-vimeo"></ion-icon>\n        </button>\n        <button ion-fab>\n          <ion-icon name="logo-googleplus"></ion-icon>\n        </button>\n      </ion-fab-list>\n    </ion-fab>\n  </ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        A lot of text and it will be separated into different columnsA lot of text and it will be separated into different columnsA\n        lot of text and it will be separated into different columnsA lot of text and it will be separated into different\n        columnsA lot of text and it will be separated into different columnsA lot of text and it will be separated into different\n        columns\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-icon ios="logo-apple" md="logo-android"></ion-icon>\n  <ion-item>\n    <ion-label fixed>Password</ion-label>\n    <ion-input floating type="password"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input floating type="password"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input type="text" placeholder="Username"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>User</ion-label>\n    <ion-input type="text"></ion-input>\n\n\n  </ion-item>\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/avatar-finn.png">\n      </ion-avatar>\n      <h2>Finn</h2>\n      <h3>Don\'t Know What To Do!</h3>\n      <p>I\'ve had a pretty messed up day. If we just...</p>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="img/slimer.png">\n        </ion-avatar>\n        <h2>Slimer</h2>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="primary">\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary">\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="primary">\n          <ion-icon name="mail"></ion-icon>\n          Email\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="img/thumbnail-totoro.png">\n      </ion-thumbnail>\n      <h2>My Neighbor Totoro</h2>\n      <p>Hayao Miyazaki • 1988</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <!--Toolbar\n                            <ion-menu [content]="content">\n                                <ion-header>\n                                  <ion-toolbar>\n                                    <ion-title>Menu</ion-title>\n                                  </ion-toolbar>\n                                </ion-header>\n                                <ion-content>\n                                  <ion-list>\n                                    <button ion-item (click)="openPage(homePage)">\n                                      Home\n                                    </button>\n                                    <button ion-item (click)="openPage(friendsPage)">\n                                      Friends\n                                    </button>\n                                    <button ion-item (click)="openPage(eventsPage)">\n                                      Events\n                                    </button>\n                                    <button ion-item (click)="closeMenu()">\n                                      Close Menu\n                                    </button>\n                                  </ion-list>\n                                </ion-content>\n                              </ion-menu>\n                              \n                              <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n                              -->\n  <ion-list radio-group>\n    <ion-list-header>\n      Language\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Go</ion-label>\n      <ion-radio checked="true" value="go"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Rust</ion-label>\n      <ion-radio value="rust"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Python</ion-label>\n      <ion-radio value="python" disabled="true"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <ion-item>\n    <ion-range [(ngModel)]="brightness">\n      <ion-icon range-left small name="sunny"></ion-icon>\n      <ion-icon range-right name="sunny"></ion-icon>\n    </ion-range>\n  </ion-item>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="kittens">\n        Kittens\n      </ion-segment-button>\n      <ion-segment-button value="puppies">\n        Puppies\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'puppies\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'kittens\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="img/thumbnail-kitten-1.jpg">\n        </ion-thumbnail>\n        <h2>Luna</h2>\n      </ion-item>\n\n    </ion-list>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label>Gaming</ion-label>\n      <ion-select [(ngModel)]="gaming">\n        <ion-option value="nes">NES</ion-option>\n        <ion-option value="n64">Nintendo64</ion-option>\n        <ion-option value="ps">PlayStation</ion-option>\n        <ion-option value="genesis">Sega Genesis</ion-option>\n        <ion-option value="saturn">Sega Saturn</ion-option>\n        <ion-option value="snes">SNES</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-label>Toppings</ion-label>\n      <ion-select [(ngModel)]="toppings" multiple="true" cancelText="Nah" okText="Okay!">\n        <ion-option value="bacon" selected="true">Bacon</ion-option>\n        <ion-option value="olives">Black Olives</ion-option>\n        <ion-option value="xcheese" selected="true">Extra Cheese</ion-option>\n        <ion-option value="peppers">Green Peppers</ion-option>\n        <ion-option value="mushrooms">Mushrooms</ion-option>\n        <ion-option value="onions">Onions</ion-option>\n        <ion-option value="pepperoni">Pepperoni</ion-option>\n        <ion-option value="pineapple">Pineapple</ion-option>\n        <ion-option value="sausage">Sausage</ion-option>\n        <ion-option value="Spinach">Spinach</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-slides pager>\n\n    <ion-slide style="background-color: green">\n      <h2>Slide 1</h2>\n    </ion-slide>\n\n    <ion-slide style="background-color: blue">\n      <h2>Slide 2</h2>\n    </ion-slide>\n\n    <ion-slide style="background-color: red">\n      <h2>Slide 3</h2>\n    </ion-slide>\n\n  </ion-slides>\n  <!--<ion-item>\n            <ion-label>Check out the right corner</ion-label>\n            <ion-toggle disabled="false"></ion-toggle>\n          </ion-item>\n          <ion-header>\n              <ion-toolbar>\n                <ion-title>Toolbar</ion-title>\n              </ion-toolbar>\n            </ion-header>\n          -->\n  <ion-content></ion-content>\n  <!--\n            <ion-footer>\n              <ion-toolbar>\n                <ion-title>Footer</ion-title>\n              </ion-toolbar>\n            </ion-footer>\n            <ion-header>\n                <ion-navbar color="dark">\n                  <ion-title>Dark</ion-title>\n                </ion-navbar>\n              </ion-header>\n              \n              \n              <ion-header>\n                <ion-navbar color="danger">\n                  <ion-title>Danger</ion-title>\n                </ion-navbar>\n              </ion-header>\n              \n              <ion-header>\n                <ion-navbar color="secondary">\n                  <ion-title>Secondary</ion-title>\n                </ion-navbar>\n              </ion-header>\n              -->\n  <ion-item>\n    <ion-label>Date</ion-label>\n    <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate">\n    </ion-datetime>\n  </ion-item>\n  <ion-tabs>\n    <ion-tab tabIcon="call" [root]="tabOne" tabBadge="3" tabBadgeStyle="danger"></ion-tab>\n    <ion-tab tabIcon="chatbubbles" [root]="tabTwo" tabBadge="14" tabBadgeStyle="danger"></ion-tab>\n    <ion-tab tabIcon="musical-notes" [root]="tabThree"></ion-tab>\n  </ion-tabs>\n  <!-- Segment in content -->\n  <ion-segment [(ngModel)]="relationship" color="primary" (ionChange)="segmentChanged($event)">\n    <ion-segment-button value="friends">\n      Friends\n    </ion-segment-button>\n    <ion-segment-button value="enemies">\n      Enemies\n    </ion-segment-button>\n  </ion-segment>\n  <ion-segment [(ngModel)]="icons" color="secondary">\n    <ion-segment-button value="camera">\n      <ion-icon name="camera"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="bookmark">\n      <ion-icon name="bookmark"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n  <!-- <form [formGroup]="myForm">\n    <ion-segment formControlName="mapStyle" color="danger">\n      <ion-segment-button value="standard">\n        Standard\n      </ion-segment-button>\n      <ion-segment-button value="hybrid">\n        Hybrid\n      </ion-segment-button>\n      <ion-segment-button value="sat">\n        Satellite\n      </ion-segment-button>\n    </ion-segment>\n  </form>-->\n</ion-content>'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\home\home.html"*/
//})
//class Profile {
//constructor(params: NavParams) {
//console.log('UserId', params.get('userId'));
//}
//}
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loadCtrl, modal) {
        this.navCtrl = navCtrl;
        this.loadCtrl = loadCtrl;
        this.modal = modal;
    }
    HomePage.prototype.button1 = function () {
        var load = this.loadCtrl.create({ content: 'All good here.', duration: 3000 });
        load.present();
        // alert("Iron Man Programmed This Button");
    };
    HomePage.prototype.button2 = function () {
        alert("I'm a decoy button button");
    };
    HomePage.prototype.button3 = function () {
        alert("I am the button speaking. Careful, for I have been trained to kill you");
    };
    HomePage.prototype.tapEvent = function (e) {
        console.log('event', e);
        // this.event=e.target.value;
    };
    HomePage.prototype.Open = function () {
        var myModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_2__md2_md2__["a" /* Md2Page */]);
        myModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Modal</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <button ion-button (click)="Open()">Open Modal\n  </button>\n\n  <!-- Float the icon right\n  <button ion-button icon-right>\n    <ion-icon name="home">Home</ion-icon>\n  </button>\n-->\n  <!-- Only icon (no text) -->\n  <br>\n  <button ion-button icon-only>\n    <ion-icon name="home">Maou-Sama\n    </ion-icon>\n  </button>\n  <button (click)="button2()" ion-button full>Full Button</button>\n  <button ion-button (click)="button3()" block>Block Button</button>\n  <ion-item>\n    <ion-icon name="logo-facebook" item-start></ion-icon>\n    Followers\n    <ion-badge color="secondary" item-end>1.6b</ion-badge>\n  </ion-item>\n  <ion-item>\n    <ion-icon name="logo-twitter" item-start></ion-icon>\n    Followers\n    <ion-badge item-end>260k</ion-badge>\n  </ion-item>\n  <button (click)="button1()" ion-button color="secondary" outline>Secret Button</button>\n  <!--\n  <ion-header>\n      <ion-navbar>\n        <ion-buttons start>\n          <button ion-button icon-only>\n            <ion-icon name="contact"></ion-icon>\n          </button>\n        </ion-buttons>\n    \n        <ion-buttons end>\n          <button ion-button icon-only>\n            <ion-icon name="search"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    </ion-header>\n    \n  -->\n\n  <ion-list>\n    <ion-item>\n      Thanos tried to kill me\n      <button ion-button outline item-end icon-left>\n        <ion-icon name="star"></ion-icon>\n        Left Icon\n      </button>\n    </ion-item>\n  </ion-list>\n  <ion-card>\n\n    <ion-card-header>\n      What do you think I am? I am a card\n    </ion-card-header>\n\n    <ion-card-content>\n      <!-- Add card content here! -->\n      I used to be just plain text, but now, I\'m so much more\n    </ion-card-content>\n\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Explore Nearby\n    </ion-card-header>\n\n    <ion-list>\n      <button ion-item>\n        <ion-icon name="cart" item-start></ion-icon>\n        Wanna go shopping?\n      </button>\n\n      <button ion-item>\n        <ion-icon name="medical" item-start></ion-icon>\n        You sick?\n      </button>\n\n      <button ion-item>\n        <ion-icon name="cafe" item-start></ion-icon>\n        Let\'s get something to eat\n      </button>\n\n      <button ion-item>\n        <ion-icon name="paw" item-start></ion-icon>\n        Bow Wow\n      </button>\n\n      <ion-card>\n        <img src="../assets/imgs/nin-live.png" />\n        <ion-card-content>\n          <ion-card-title>\n            Well, Well, Well\n          </ion-card-title>\n          <p>\n            Well, it was nice when it finally worked.\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n  </ion-card>\n  <ion-card>\n    <!-- <img src="../assets/imgs/card-saopaolo.png"/> -->\n    <div class="card-title">São Paulo</div>\n    <div class="card-subtitle">41 Listings</div>\n  </ion-card>\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <!--supposed to be an avatar here:/-->\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>November 5, 1955</p>\n    </ion-item>\n\n    <ion-card-content>\n      <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!\n        Whoa. This is heavy.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>12 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>Centurion</div>\n        </button>\n      </ion-col>\n      <ion-col center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n  <ion-item>\n    <ion-label>Solo: A Star Wars Story</ion-label>\n    <ion-checkbox color="light" checked="false"></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Ant-Man and the Wasp</ion-label>\n    <ion-checkbox color="secondary" disabled="false"></ion-checkbox>\n  </ion-item>\n  <ion-card (tap)="tapEvent($event)">\n    <ion-item>\n      Tapped: {{tap}} times\n    </ion-item>\n  </ion-card>\n  <ion-content>\n    <!-- Real floating action button, fixed. It will not scroll with the content -->\n    <ion-fab top right edge>\n      <button ion-fab mini>\n        <ion-icon name="add"></ion-icon>\n      </button>\n      <ion-fab-list>\n        <button ion-fab>\n          <ion-icon name="logo-facebook"></ion-icon>\n        </button>\n        <button ion-fab>\n          <ion-icon name="logo-twitter"></ion-icon>\n        </button>\n        <button ion-fab>\n          <ion-icon name="logo-vimeo"></ion-icon>\n        </button>\n        <button ion-fab>\n          <ion-icon name="logo-googleplus"></ion-icon>\n        </button>\n      </ion-fab-list>\n    </ion-fab>\n  </ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        A lot of text and it will be separated into different columnsA lot of text and it will be separated into different columnsA\n        lot of text and it will be separated into different columnsA lot of text and it will be separated into different\n        columnsA lot of text and it will be separated into different columnsA lot of text and it will be separated into different\n        columns\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-icon ios="logo-apple" md="logo-android"></ion-icon>\n  <ion-item>\n    <ion-label fixed>Password</ion-label>\n    <ion-input floating type="password"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input floating type="password"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input type="text" placeholder="Username"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>User</ion-label>\n    <ion-input type="text"></ion-input>\n\n\n  </ion-item>\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/avatar-finn.png">\n      </ion-avatar>\n      <h2>Finn</h2>\n      <h3>Don\'t Know What To Do!</h3>\n      <p>I\'ve had a pretty messed up day. If we just...</p>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="img/slimer.png">\n        </ion-avatar>\n        <h2>Slimer</h2>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="primary">\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary">\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="primary">\n          <ion-icon name="mail"></ion-icon>\n          Email\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="img/thumbnail-totoro.png">\n      </ion-thumbnail>\n      <h2>My Neighbor Totoro</h2>\n      <p>Hayao Miyazaki • 1988</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <!--Toolbar\n                            <ion-menu [content]="content">\n                                <ion-header>\n                                  <ion-toolbar>\n                                    <ion-title>Menu</ion-title>\n                                  </ion-toolbar>\n                                </ion-header>\n                                <ion-content>\n                                  <ion-list>\n                                    <button ion-item (click)="openPage(homePage)">\n                                      Home\n                                    </button>\n                                    <button ion-item (click)="openPage(friendsPage)">\n                                      Friends\n                                    </button>\n                                    <button ion-item (click)="openPage(eventsPage)">\n                                      Events\n                                    </button>\n                                    <button ion-item (click)="closeMenu()">\n                                      Close Menu\n                                    </button>\n                                  </ion-list>\n                                </ion-content>\n                              </ion-menu>\n                              \n                              <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n                              -->\n  <ion-list radio-group>\n    <ion-list-header>\n      Language\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Go</ion-label>\n      <ion-radio checked="true" value="go"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Rust</ion-label>\n      <ion-radio value="rust"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Python</ion-label>\n      <ion-radio value="python" disabled="true"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <ion-item>\n    <ion-range [(ngModel)]="brightness">\n      <ion-icon range-left small name="sunny"></ion-icon>\n      <ion-icon range-right name="sunny"></ion-icon>\n    </ion-range>\n  </ion-item>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="kittens">\n        Kittens\n      </ion-segment-button>\n      <ion-segment-button value="puppies">\n        Puppies\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'puppies\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'kittens\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="img/thumbnail-kitten-1.jpg">\n        </ion-thumbnail>\n        <h2>Luna</h2>\n      </ion-item>\n\n    </ion-list>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label>Gaming</ion-label>\n      <ion-select [(ngModel)]="gaming">\n        <ion-option value="nes">NES</ion-option>\n        <ion-option value="n64">Nintendo64</ion-option>\n        <ion-option value="ps">PlayStation</ion-option>\n        <ion-option value="genesis">Sega Genesis</ion-option>\n        <ion-option value="saturn">Sega Saturn</ion-option>\n        <ion-option value="snes">SNES</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-label>Toppings</ion-label>\n      <ion-select [(ngModel)]="toppings" multiple="true" cancelText="Nah" okText="Okay!">\n        <ion-option value="bacon" selected="true">Bacon</ion-option>\n        <ion-option value="olives">Black Olives</ion-option>\n        <ion-option value="xcheese" selected="true">Extra Cheese</ion-option>\n        <ion-option value="peppers">Green Peppers</ion-option>\n        <ion-option value="mushrooms">Mushrooms</ion-option>\n        <ion-option value="onions">Onions</ion-option>\n        <ion-option value="pepperoni">Pepperoni</ion-option>\n        <ion-option value="pineapple">Pineapple</ion-option>\n        <ion-option value="sausage">Sausage</ion-option>\n        <ion-option value="Spinach">Spinach</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-slides pager>\n\n    <ion-slide style="background-color: green">\n      <h2>Slide 1</h2>\n    </ion-slide>\n\n    <ion-slide style="background-color: blue">\n      <h2>Slide 2</h2>\n    </ion-slide>\n\n    <ion-slide style="background-color: red">\n      <h2>Slide 3</h2>\n    </ion-slide>\n\n  </ion-slides>\n  <!--<ion-item>\n            <ion-label>Check out the right corner</ion-label>\n            <ion-toggle disabled="false"></ion-toggle>\n          </ion-item>\n          <ion-header>\n              <ion-toolbar>\n                <ion-title>Toolbar</ion-title>\n              </ion-toolbar>\n            </ion-header>\n          -->\n  <ion-content></ion-content>\n  <!--\n            <ion-footer>\n              <ion-toolbar>\n                <ion-title>Footer</ion-title>\n              </ion-toolbar>\n            </ion-footer>\n            <ion-header>\n                <ion-navbar color="dark">\n                  <ion-title>Dark</ion-title>\n                </ion-navbar>\n              </ion-header>\n              \n              \n              <ion-header>\n                <ion-navbar color="danger">\n                  <ion-title>Danger</ion-title>\n                </ion-navbar>\n              </ion-header>\n              \n              <ion-header>\n                <ion-navbar color="secondary">\n                  <ion-title>Secondary</ion-title>\n                </ion-navbar>\n              </ion-header>\n              -->\n  <ion-item>\n    <ion-label>Date</ion-label>\n    <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate">\n    </ion-datetime>\n  </ion-item>\n  <ion-tabs>\n    <ion-tab tabIcon="call" [root]="tabOne" tabBadge="3" tabBadgeStyle="danger"></ion-tab>\n    <ion-tab tabIcon="chatbubbles" [root]="tabTwo" tabBadge="14" tabBadgeStyle="danger"></ion-tab>\n    <ion-tab tabIcon="musical-notes" [root]="tabThree"></ion-tab>\n  </ion-tabs>\n  <!-- Segment in content -->\n  <ion-segment [(ngModel)]="relationship" color="primary" (ionChange)="segmentChanged($event)">\n    <ion-segment-button value="friends">\n      Friends\n    </ion-segment-button>\n    <ion-segment-button value="enemies">\n      Enemies\n    </ion-segment-button>\n  </ion-segment>\n  <ion-segment [(ngModel)]="icons" color="secondary">\n    <ion-segment-button value="camera">\n      <ion-icon name="camera"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="bookmark">\n      <ion-icon name="bookmark"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n  <!-- <form [formGroup]="myForm">\n    <ion-segment formControlName="mapStyle" color="danger">\n      <ion-segment-button value="standard">\n        Standard\n      </ion-segment-button>\n      <ion-segment-button value="hybrid">\n        Hybrid\n      </ion-segment-button>\n      <ion-segment-button value="sat">\n        Satellite\n      </ion-segment-button>\n    </ion-segment>\n  </form>-->\n</ion-content>'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_popover__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Md2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Md2Page = /** @class */ (function () {
    function Md2Page(navCtrl, navParams, view, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.popoverCtrl = popoverCtrl;
    }
    Md2Page.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__popover_popover__["a" /* PopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    Md2Page.prototype.closeModal = function () {
        this.view.dismiss();
    };
    Md2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Md2Page');
    };
    Md2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-md2',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\md2\md2.html"*/'<!--\n  Generated template for the Md2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    \n    <ion-title>Modal Page</ion-title>\n    <button ion-button (click)="closeModal()">Close</button>\n  </ion-navbar>\n  <!--<button ion-button icon-right>\n      Right Icon\n      <ion-icon name="close"></ion-icon>\n    </button>-->\n</ion-header>\n\n\n\n<ion-content padding>\n<p>Good Morning, Sir!</p>\n<button ion-button icon-only (click)="presentPopover($event)">\n  <ion-icon name="more"></ion-icon>\n</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\md2\md2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], Md2Page);
    return Md2Page;
}());

//# sourceMappingURL=md2.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverPage = /** @class */ (function () {
    function PopoverPage(navCtrl, navParams, popoverCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.viewCtrl = viewCtrl;
    }
    PopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverPage');
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-popover',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\popover\popover.html"*/'<!--\n  Generated template for the PopoverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PopoverPage</ion-title>\n    <button ion-item (click)="close()">Bye!</button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\popover\popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StylingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StylingPage = /** @class */ (function () {
    function StylingPage(navCtrl, navParams, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.User = "Codename";
    }
    StylingPage.prototype.changeUser = function (ev) {
        this.User = ev.target.value;
    };
    StylingPage.prototype.Submit = function () {
        var load = this.loadCtrl.create({ content: this.fname + ' ' + this.lname + ' of ' + this.country + ' says, ' + this.subject, duration: 3000 });
        // var load1 = this.loadCtrl.create({content: this.lname,duration:1000});
        // var load2 = this.loadCtrl.create({content:this.subject,duration:4000});
        load.present();
        // setTimeout(() => {
        //   loading.dismiss();
        // }, 5000);
        // load1.present();
        // load2.present();
    };
    StylingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StylingPage');
    };
    StylingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-styling',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\styling\styling.html"*/'<!--\n  Generated template for the StylingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Styling</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container">\n    <form action="post">\n      <!-- <form action=\'Submit()\'> -->\n      <div class="row">\n        <div class="col-25">\n          <label for="fname">First Name</label>\n        </div>\n        <div class="col-75">\n          <input type="text" id="fname" name="firstname" [(ngModel)]="fname" placeholder="Enter your first name">\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-25">\n          <label for="lname">Last Name</label>\n        </div>\n        <div class="col-75">\n          <input type="text" id="lname" name="lastname" [(ngModel)]="lname" placeholder="Enter your last name">\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-25">\n          <label for="country">Country</label>\n        </div>\n        <div class="col-75">\n          <select id="country" name="country" [(ngModel)]="country">\n            <option value="India">India</option>\n            <option value="Bahrain">Canada</option>\n            <option value="USA">USA</option>          \n          </select>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-25">\n          <label for="subject">Subject</label>\n        </div>\n        <div class="col-75">\n          <textarea id="subject" name="subject" [(ngModel)]="subject" placeholder="Input text here" style="height:100px"></textarea>\n        </div>\n      </div>\n      <div class="row">\n        <input type="submit" value="Submit" (click)="Submit()">\n      </div>\n    </form>\n  </div>\n  <div style="text-align: center">\n    <h1>Two-Way Binding Being Tested Here</h1>\n      Hello: {{User}}<br>\n      <input type="text" [(ngModel)]="User">\n      </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\styling\styling.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], StylingPage);
    return StylingPage;
}());

//# sourceMappingURL=styling.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_modal_event_modal__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalendarPage = /** @class */ (function () {
    function CalendarPage(navCtrl, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.type = 'month';
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: this.type,
            currentDate: this.selectedDay
        };
    }
    CalendarPage.prototype.changeFormat = function (type) {
        this.calendar = {
            mode: type,
            currentDate: this.selectedDay
        };
    };
    CalendarPage.prototype.addEvent = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__event_modal_event_modal__["a" /* EventModalPage */], { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                var eventData = data;
                eventData.startTime = new Date(data.startTime);
                eventData.endTime = new Date(data.endTime);
                var events_1 = _this.eventSource;
                events_1.push(eventData);
                _this.eventSource = [];
                setTimeout(function () {
                    _this.eventSource = events_1; //To update immediately
                });
            }
        });
    };
    CalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CalendarPage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
    };
    CalendarPage.prototype.onViewSelected = function (event) {
    };
    CalendarPage.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTime).format('LLLL');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.endTime).format('LLLL');
        var alert = this.alertCtrl.create({
            title: ' ' + event.title,
            subTitle: 'From: ' + start + '<br>To: ' + end,
            buttons: ['OK']
        });
        alert.present();
    };
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-calendar',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\calendar\calendar.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      {{viewTitle}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addEvent()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button (click)="changeFormat(\'day\')">Day</button>\n  <button ion-button (click)="changeFormat(\'week\')">Week</button>\n  <button ion-button (click)="changeFormat(\'month\')">Month</button>\n<calendar [eventSource]="eventSource"\n[calendarMode]="calendar.mode"\n[currentDate]="calendar.currentDate"\n(onEventSelected)="onEventSelected($event)"\n(onTitleChanged)="onViewTitleChanged($event)"\n(onTimeSelected)="onTimeSelected($event)"\nstep="30"\nclass="calendar">\n</calendar>\n</ion-content>\n'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\calendar\calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { IonicPage} from 'ionic-angular';

//import { CalendarPage } from '../calendar/calendar';
// @IonicPage()
var EventModalPage = /** @class */ (function () {
    function EventModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
        this.minDate = new Date().toISOString();
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get('SelectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
    }
    EventModalPage.prototype.save = function () {
        this.viewCtrl.dismiss(this.event);
    };
    EventModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-event-modal',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\event-modal\event-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Event Details</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content>\n\n  <ion-list>\n\n\n    <ion-item>\n      <ion-input type="text" placeholder="Title" [(ngModel)]="event.title"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Start</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY HH:mm" pickerFormat="DD/MM/YYYY HH:mm" [(ngModel)]="event.startTime" ></ion-datetime>\n        </ion-item>\n      \n        <ion-item>\n            <ion-label>End</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY HH:mm" pickerFormat="DD/MM/YYYY HH:mm" [(ngModel)]="event.endTime" [min]="minDate"></ion-datetime>\n            </ion-item>\n      \n            <ion-item>\n                <ion-label>All Day</ion-label>\n                <ion-checkbox [(ngModel)]="event.allDay"></ion-checkbox>\n                </ion-item>      \n\n  </ion-list>\n\n\n  <button ion-button full-icon (click)="save()">\n  <ion-icon name="checkmark"></ion-icon>Add Event\n  </button>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\hp\myApp\src\pages\event-modal\event-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], EventModalPage);
    return EventModalPage;
}());

//# sourceMappingURL=event-modal.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




__WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;


var PdfPage = /** @class */ (function () {
    function PdfPage(navCtrl, plt, file, fileOpener) {
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.file = file;
        this.fileOpener = fileOpener;
        this.letterObj = {
            from: 'Viswanath M',
            to: 'Mr. Gaurish',
            text: "This is the PDF Maker and it isn't the best out there for sure."
        };
        this.pdfObj = null;
    }
    PdfPage.prototype.createPdf = function () {
        var docDefinition = {
            content: [
                { text: 'Fame Technologies Solutions', style: 'header' },
                { text: new Date().toTimeString(), alignment: 'right' },
                { text: 'From', style: 'subheader' },
                { text: this.letterObj.from },
                { text: 'To', style: 'subheader' },
                this.letterObj.to,
                { text: this.letterObj.text, style: 'story', margin: [0, 20, 0, 20] },
                {
                    ol: [
                        'AurionPro',
                        'FTS',
                        'Fame Technologies Services',
                    ]
                }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 15, 0, 0]
                },
                story: {
                    italic: true,
                    alignment: 'center',
                    width: '50%',
                }
            }
        };
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake___default.a.createPdf(docDefinition);
    };
    PdfPage.prototype.downloadPdf = function () {
        var _this = this;
        if (this.plt.is('cordova')) {
            this.pdfObj.getBuffer(function (buffer) {
                var blob = new Blob([buffer], { type: 'application/pdf' });
                // Save the PDF to the data Directory of our App
                _this.file.writeFile(_this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(function (fileEntry) {
                    // Open the PDf with the correct OS tools
                    _this.fileOpener.open(_this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
                });
            });
        }
        else {
            // On a browser simply use download!
            this.pdfObj.download();
        }
    };
    PdfPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pdf',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\pdf\pdf.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ionic PDF</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n    <ion-item>\n        <ion-label stacked>From</ion-label>\n        <ion-input [(ngModel)]="letterObj.from"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>To</ion-label>\n        <ion-input [(ngModel)]="letterObj.to"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Text</ion-label>\n        <ion-textarea [(ngModel)]="letterObj.text" rows="10"></ion-textarea>\n      </ion-item>\n\n<button ion-button full (click)="createPdf()">Create PDF</button>\n\n<button ion-button full (click)="downloadPdf()" color="secondary" [disabled]="!pdfObj">Download PDF</button>\n\n  </ion-content>\n'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\pdf\pdf.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */]])
    ], PdfPage);
    return PdfPage;
}());

//# sourceMappingURL=pdf.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




__WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;


var PdfProjectPage = /** @class */ (function () {
    function PdfProjectPage(navCtrl, plt, file, fileOpener) {
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.file = file;
        this.fileOpener = fileOpener;
        this.letterObj = {
            invoiceto: ' ',
            invoice: ' ',
            payment: ' ',
            itemdesc: ' ',
            account: ' ',
        };
        this.pdfObj = null;
    }
    PdfProjectPage.prototype.createPdf = function () {
        this.total = this.price * this.qty;
        this.tax = this.total * 0.05;
        this.stotal = this.tax + this.total;
        var data = [['Sl No.', 'Item Description', 'Price', 'Qty.', 'Total']];
        var i = 0;
        var len = this.slno;
        for (; i < len; i++) {
            data.push([this.slno + '', this.letterObj.itemdesc, this.price + ' $', this.qty + ' $', this.total + ' $']);
        }
        var docDefinition = {
            content: [
                {
                    text: 'Fame Technology Solutions', style: 'header'
                },
                {
                    text: 'VAT Invoice\n\n', style: 'subheader', alignment: 'right'
                },
                {
                    text: new Date().toTimeString(), alignment: 'right'
                },
                {
                    text: '\n\nInvoice To: ' + this.letterObj.invoiceto
                },
                {
                    text: 'Invoice No: ' + this.letterObj.invoice, alignment: 'right',
                },
                {
                    text: '\n\n',
                },
                {
                    style: '\n\ntableExample',
                    table: {
                        widths: [54, 250, 54, 54, 54],
                        body: data
                    }
                },
                {
                    columns: [
                        {
                            width: 420,
                            text: '\n\nPayment Info: ' + this.letterObj.payment + '\nAccount No: ' + this.letterObj.account + '\n\n\n\n\nThank You for your Business',
                        },
                        {
                            width: 'auto',
                            text: '\n\nTotal ' + this.total + '\nTax ' + this.tax + '\n-----------------' + '\nSub Total ' + this.stotal
                        }
                    ]
                },
            ]
        };
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake___default.a.createPdf(docDefinition);
    };
    PdfProjectPage.prototype.downloadPdf = function () {
        var _this = this;
        if (this.plt.is('cordova')) {
            this.pdfObj.getBuffer(function (buffer) {
                var blob = new Blob([buffer], { type: 'application/pdf' });
                // Save the PDF to the data Directory of our App
                _this.file.writeFile(_this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(function (fileEntry) {
                    // Open the PDf with the correct OS tools
                    _this.fileOpener.open(_this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
                });
            });
        }
        else {
            // On a browser simply use download
            this.pdfObj.download();
        }
    };
    PdfProjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pdf-project',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\pdf-project\pdf-project.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Ionic PDF</ion-title>\n  </ion-navbar>\n</ion-header>\n  <!-- for(var i=0;i<5;i++)\n  { -->\n<ion-content padding>\n  <ion-item>\n    <ion-label stacked>Invoice To: </ion-label>\n      <ion-input [(ngModel)]="letterObj.invoiceto"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Invoice No.</ion-label>\n      <ion-input [(ngModel)]="letterObj.invoice"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Sl No. </ion-label>\n      <ion-input [(ngModel)]="slno"></ion-input>\n  </ion-item>\n\n  \n  <ion-item>\n    <ion-label stacked>Item Description </ion-label>\n      <ion-input [(ngModel)]="letterObj.itemdesc"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Price</ion-label>\n      <ion-input [(ngModel)]="price"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Quantity</ion-label>\n      <ion-input [(ngModel)]="qty"></ion-input>\n  </ion-item>\n\n  <!-- <ion-item>\n    <ion-label stacked>Total</ion-label>\n      <ion-input [(ngModel)]="letterObj.total"></ion-input>\n  </ion-item> -->\n  <!-- } -->\n  <ion-item>\n    <ion-label stacked>Payment Info</ion-label>\n      <ion-input [(ngModel)]="letterObj.payment"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Account No.</ion-label>\n      <ion-input [(ngModel)]="letterObj.account"></ion-input>\n  </ion-item>\n  \n  <button ion-button full (click)="createPdf()">Create PDF</button>\n  <button ion-button full (click)="downloadPdf()" color="secondary" [disabled]="!pdfObj">Download PDF</button>\n  \n</ion-content>\n  '/*ion-inline-end:"C:\Users\hp\myApp\src\pages\pdf-project\pdf-project.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */]])
    ], PdfProjectPage);
    return PdfProjectPage;
}());

//# sourceMappingURL=pdf-project.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Canvas2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Canvas2Page = /** @class */ (function () {
    function Canvas2Page(platform, renderer) {
        this.platform = platform;
        this.renderer = renderer;
        this.currentColour = '#000000';
        this.brushSize = 10;
        console.log('Hello CanvasDraw Component');
        this.availableColours = [
            '#1abc9c',
            '#3498db',
            '#9b59b6',
            '#e67e22',
            '#e74c3c'
        ];
    }
    Canvas2Page.prototype.ngAfterViewInit = function () {
        this.canvasElement = this.canvas.nativeElement;
        this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
        this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
    };
    Canvas2Page.prototype.changeColour = function (colour) {
        this.currentColour = colour;
    };
    Canvas2Page.prototype.changeSize = function (size) {
        this.brushSize = size;
    };
    Canvas2Page.prototype.handleStart = function (ev) {
        this.lastX = ev.touches[0].pageX;
        this.lastY = ev.touches[0].pageY;
    };
    Canvas2Page.prototype.handleMove = function (ev) {
        var ctx = this.canvasElement.getContext('2d');
        var currentX = ev.touches[0].pageX;
        var currentY = ev.touches[0].pageY;
        ctx.beginPath();
        ctx.lineJoin = "round";
        ctx.moveTo(this.lastX, this.lastY);
        ctx.lineTo(currentX, currentY);
        ctx.closePath();
        ctx.strokeStyle = this.currentColour;
        ctx.lineWidth = this.brushSize;
        ctx.stroke();
        this.lastX = currentX;
        this.lastY = currentY;
    };
    Canvas2Page.prototype.clearCanvas = function () {
        var ctx = this.canvasElement.getContext('2d');
        ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myCanvas'),
        __metadata("design:type", Object)
    ], Canvas2Page.prototype, "canvas", void 0);
    Canvas2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-canvas2',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\canvas2\canvas2.html"*/'<ion-content no-bounce>\n    <ion-toolbar id="top-toolbar">\n        <ion-buttons left>\n            <button *ngFor="let colour of availableColours" icon-only ion-button (click)="changeColour(colour)">\n                <ion-icon [style.color]="colour" name="brush"></ion-icon>\n            </button>\n        </ion-buttons>\n        <!-- Eraser -->\n        <ion-buttons right>\n            <button style="border: 1px solid #cecece;" ion-button icon-only style.color="#fff" (click)="changeColour(\'#fff\')">\n                <ion-icon style="color: #fff;" name="circle"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n\n    <canvas #myCanvas (touchstart)="handleStart($event)" (touchmove)="handleMove($event)"></canvas>\n\n    <ion-toolbar id="bottom-toolbar">\n        <ion-buttons left>\n            <button color="dark" ion-button icon-only (click)="clearCanvas()">\n                <ion-icon name="trash"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons right>\n            <button color="dark" ion-button icon-only (click)="changeSize(5)">\n                <ion-icon style="font-size: 0.25em;" name="radio-button-on"></ion-icon>\n            </button>\n            <button color="dark" ion-button icon-only (click)="changeSize(10)">\n                <ion-icon style="font-size: 0.5em;" name="radio-button-on"></ion-icon>\n            </button>\n            <button color="dark" ion-button icon-only (click)="changeSize(20)">\n                <ion-icon style="font-size: 1em;" name="radio-button-on"></ion-icon>\n            </button>\n            <button color="dark" ion-button icon-only (click)="changeSize(50)">\n                <ion-icon style="font-size: 2em;" name="radio-button-on"></ion-icon>\n            </button>\n            <button color="dark" ion-button icon-only (click)="changeSize(200)">\n                <ion-icon style="font-size: 3em;" name="radio-button-on"></ion-icon> \n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-content>'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\canvas2\canvas2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], Canvas2Page);
    return Canvas2Page;
}());

//# sourceMappingURL=canvas2.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragnDropPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DragnDropPage = /** @class */ (function () {
    function DragnDropPage(navController, alertCtrl, dragulaService) {
        var _this = this;
        this.navController = navController;
        this.alertCtrl = alertCtrl;
        this.dragulaService = dragulaService;
        this.q1 = [];
        this.q2 = [];
        for (var i = 0; i < 20; i++) {
            this.q1.push("Array 1 (" + i + ")");
            this.q2.push("Array 2 (" + i + ")");
        }
        dragulaService.drop.subscribe(function (value) {
            var alert = _this.alertCtrl.create({
                title: 'Item moved',
                buttons: ['OK']
            });
            alert.present();
        });
    }
    DragnDropPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dragn-drop',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\dragn-drop\dragn-drop.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Drag & Drop\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <ion-row>\n    <ion-col col-6 class="left">\n      <div class="header">First Bucket</div>\n      <!--Allows drag an drop between each other and use everything in the array -->\n      <ion-list [dragula]=\'"my-bag"\' [dragulaModel]="q2">\n        <button ion-item *ngFor="let item of q2" detail-none>\n          {{item}}\n      </button>\n      </ion-list>\n    </ion-col>\n \n    <ion-col col-6 class="right">\n      <div class="header">Second Bucket</div>\n      <ion-list [dragula]=\'"my-bag"\' [dragulaModel]="q1">\n        <button ion-item *ngFor="let item of q1" detail-none>\n          {{item}}\n        </button>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\dragn-drop\dragn-drop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__["DragulaService"]])
    ], DragnDropPage);
    return DragnDropPage;
}());

//# sourceMappingURL=dragn-drop.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QrcodePage = /** @class */ (function () {
    function QrcodePage(barcodeScanner) {
        this.barcodeScanner = barcodeScanner;
        this.qrData = null;
        this.createdCode = null;
        this.scannedCode = null;
    }
    QrcodePage.prototype.createCode = function () {
        this.createdCode = this.qrData;
    };
    QrcodePage.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.scannedCode = barcodeData.text;
        });
    };
    QrcodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-qrcode',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\qrcode\qrcode.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>QR Code</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-input type="text" placeholder="QR Data" [(ngModel)]="qrData">\n    </ion-input>\n  </ion-item>\n\n  <button ion-button full icon-left (click)="createCode()">\n    <ion-icon>Create Code</ion-icon>\n  </button>\n\n  <button ion-button full icon-left (click)="scanCode()">\n    <ion-icon>Scan Code</ion-icon>\n  </button>\n\n  <ion-card *ngIf="createdCode">\n    <ion-card-content>\n      <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n      <p>Value: {{createdCode}} </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="scannedCode">\n    <ion-card-content>\n      Result from Scan: {{scannedCode}}\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\qrcode\qrcode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], QrcodePage);
    return QrcodePage;
}());

//# sourceMappingURL=qrcode.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutocompletePage = /** @class */ (function () {
    function AutocompletePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.topics = [];
        this.talks = [];
        this.preparedTags = [
            '#Ionic',
            '#Angular',
            '#Mobile',
        ];
    }
    AutocompletePage.prototype.addTalk = function () {
        this.talks.push({ name: this.name, topics: this.topics });
    };
    AutocompletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-autocomplete',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\autocomplete\autocomplete.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Blog</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-input [(ngModel)]="name" placeholder="My Talk"></ion-input>\n  </ion-item>\n\n  <!-- AddOnBlur -> false, else it will autofill when out of focus -->\n  <rl-tag-input [(ngModel)]="topics"  [addOnBlur]="false" [autocomplete]="true" [autocompleteItems]="preparedTags" placeholder="Topics">\n  </rl-tag-input>\n  <button ion-button full (click)="addTalk()">Add Talk</button>\n  <ion-list>\n    <ion-item *ngFor="let talk of talks">\n      {{talk.name}}\n      <p>\n        <!-- So that everything in there separated by a space won\'t be considered as array, rather taken in here -->\n        {{talk.topics.join(\' \') }}\n      </p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\autocomplete\autocomplete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__["a" /* NavController */]])
    ], AutocompletePage);
    return AutocompletePage;
}());

//# sourceMappingURL=autocomplete.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormPage = /** @class */ (function () {
    function FormPage() {
    }
    FormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-form',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\form\form.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Form</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container">\n    <!-- <div class="row">\n      <div class="col-sm-6 col-sm-offset-3">\n        <simple-form></simple-form>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-sm-6 col-sm-offset-3">\n        <complex-form></complex-form>\n      </div>\n    </div> -->\n    <div class="row">\n      <div class="col-sm-6 col-sm-offset-3">\n        <!-- <form-validation></form-validation> -->\n        <form-main></form-main>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\form\form.html"*/,
        })
    ], FormPage);
    return FormPage;
}());

//# sourceMappingURL=form.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CsvPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_papaparse__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_papaparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_papaparse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CsvPage = /** @class */ (function () {
    function CsvPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.csvData = [];
        this.headerRow = [];
        this.readCsvData();
    }
    CsvPage.prototype.readCsvData = function () {
        var _this = this;
        this.http.get('assets/icon/dummyData.csv').subscribe(function (data) { return _this.extractData(data); }, function (err) { return _this.handleError(err); });
    };
    CsvPage.prototype.extractData = function (res) {
        var csvData = res['_body'] || '';
        // Takes value using limiter
        var parsedData = __WEBPACK_IMPORTED_MODULE_1_papaparse__["parse"](csvData).data;
        this.headerRow = parsedData[0];
        //Removes the one already taken, so that the rest can be parsed and put in
        parsedData.splice(0, 1);
        this.csvData = parsedData;
    };
    CsvPage.prototype.downloadCSV = function () {
        var csv = __WEBPACK_IMPORTED_MODULE_1_papaparse__["unparse"]({
            fields: this.headerRow,
            data: this.csvData
        });
        //For downloading the file and viewing changes
        var blob = new Blob([csv]);
        var a = window.document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = "newdata.csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    //To stop the data from getting lost like it does sometimes -> Array loses focus when input changes
    CsvPage.prototype.trackByFn = function (index, item) {
        return index;
    };
    CsvPage.prototype.handleError = function (err) {
        console.log('Something went wrong: ', err);
    };
    CsvPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-csv',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\csv\csv.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>CSV Data</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="downloadCSV()">\n        <ion-icon name="download"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-scroll scrollX="true" scrollY="true" class="data-scroll">\n    <table border="1" class="data-table">\n      <tr>\n        <td *ngFor="let header of headerRow" text-center>\n          <br>{{ header }}</td>\n      </tr>\n      <tr *ngFor="let row of csvData; let i=index">\n        <td *ngFor="let data of row; let j=index; trackBy: trackByFn">\n          <ion-input type="text" [(ngModel)]="csvData[i][j]"></ion-input>\n        </td>\n      </tr>\n    </table>\n  </ion-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\csv\csv.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], CsvPage);
    return CsvPage;
}());

//# sourceMappingURL=csv.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AwsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_aws_aws__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(396);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AwsPage = /** @class */ (function () {
    function AwsPage(navCtrl, loadingCtrl, toastCtrl, awsProvider, actionSheetCtrl, file, camera) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.awsProvider = awsProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.file = file;
        this.camera = camera;
        this.images = [];
    }
    AwsPage.prototype.ionViewWillEnter = function () {
        this.loadImages();
    };
    AwsPage.prototype.loadImages = function () {
        var _this = this;
        this.images = [];
        this.awsProvider.getFileList().subscribe(function (files) {
            var _loop_1 = function (name_1) {
                _this.awsProvider.getSignedFileRequest(name_1).subscribe(function (res) {
                    _this.images.push({ key: name_1, url: res });
                });
            };
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var name_1 = files_1[_i];
                _loop_1(name_1);
            }
        });
    };
    AwsPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    AwsPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: sourceType
        };
        // 1
        this.camera.getPicture(options).then(function (imageData) {
            var loading = _this.loadingCtrl.create();
            loading.present();
            //2
            _this.file.resolveLocalFilesystemUrl(imageData).then(function (oneFile) {
                //3
                _this.file.readAsArrayBuffer(_this.file.tempDirectory, oneFile.name).then(function (realFile) {
                    var type = 'jpg';
                    //4
                    var newName = _this.awsProvider.randomString(6) + new Date().getTime() + '.' + type;
                    //5
                    _this.awsProvider.getSignedUploadRequest(newName, 'image/jpeg').subscribe(function (data) {
                        var reqUrl = data.signedRequest;
                        //6
                        _this.awsProvider.uploadFile(reqUrl, realFile).subscribe(function (result) {
                            //7
                            _this.awsProvider.getSignedFileRequest(newName).subscribe(function (res) {
                                //8
                                _this.images.push({ key: newName, url: res });
                                loading.dismiss();
                            });
                        });
                    });
                });
            }, function (err) {
                console.log('err: ', err);
            });
        }, function (err) {
            console.log('err: ', err);
        });
    };
    AwsPage.prototype.deleteImage = function (index) {
        var _this = this;
        var toRemove = this.images.splice(index, 1);
        this.awsProvider.deleteFile(toRemove[0]['key']).subscribe(function (res) {
            var toast = _this.toastCtrl.create({
                message: res['msg'],
                duration: 2000
            });
            toast.present();
        });
    };
    AwsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-aws',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\aws\aws.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Ionic Included App\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="edit = !edit">\n          <ion-icon name="unlock" *ngIf="edit"></ion-icon>\n          <ion-icon name="lock" *ngIf="!edit"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n \n<ion-content padding>\n  \n  <h3 [hidden]="images.length !== 0" text-center>No Images found!</h3>\n \n  <ion-list>\n    <ion-card *ngFor="let img of images; let i = index">\n      \n      <img [src]="img.url">\n      <button ion-button full color="danger" [style.margin]="0" *ngIf="edit" (click)="deleteImage(i)">\n              <ion-icon name="trash"></ion-icon>\n            </button>\n    </ion-card>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab (click)="presentActionSheet()">\n       <ion-icon name="camera"></ion-icon>\n      </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\aws\aws.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_aws_aws__["a" /* AwsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
    ], AwsPage);
    return AwsPage;
}());

//1. Get image
//2. resolve it to local url
//3. read local File
//4. append to put request
//5. create new name
//6. get put request signed url 
//7. use it to upload File
//8. resolve the new file to add to array 
//# sourceMappingURL=aws.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AwsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AwsProvider = /** @class */ (function () {
    function AwsProvider(http) {
        this.http = http;
        this.apiUrl = 'http://192.168.2.108:5000/';
        this.randomString = function (length) {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        };
    }
    AwsProvider.prototype.getSignedUploadRequest = function (name, type) {
        return this.http.get(this.apiUrl + "aws/sign?file-name=" + name + "&file-type=" + type).map(function (res) { return res.json(); });
    };
    AwsProvider.prototype.getFileList = function () {
        return this.http.get(this.apiUrl + "aws/files")
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res['Contents'].map(function (val) { return val.Key; });
        });
    };
    AwsProvider.prototype.getSignedFileRequest = function (name) {
        return this.http.get(this.apiUrl + "aws/files/" + name).map(function (res) { return res.json(); });
    };
    AwsProvider.prototype.deleteFile = function (name) {
        return this.http.delete(this.apiUrl + "aws/files/" + name).map(function (res) { return res.json(); });
    };
    AwsProvider.prototype.uploadFile = function (url, file) {
        return this.http.put(url, file);
    };
    AwsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AwsProvider);
    return AwsProvider;
}());

//# sourceMappingURL=aws.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthProvider = /** @class */ (function () {
    // currentUser: User;
    function AuthProvider() {
    }
    AuthProvider.prototype.login = function (name, pw) {
        return new Promise(function (resolve, reject) {
            if (name == 'mvnath1998@gmail.com' && pw == 'admin') {
                // name: name,
                // role:0
                resolve(true);
            }
            else {
                reject('No such user name or incorrect password.');
            }
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(427);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_app_form__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_md2_md2__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_popover_popover__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_styling_styling__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_Root_Root__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_calendar_calendar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic2_calendar__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_event_modal_event_modal__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_pdf_pdf__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_opener__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_pdf_project_pdf_project__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_canvas_canvas__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_canvas2_canvas2__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_chat_room_chat_room__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_dragn_drop_dragn_drop__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_dragula__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ngx_qrcode2__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_barcode_scanner__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular2_tag_input__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular2_tag_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_angular2_tag_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_qrcode_qrcode__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_autocomplete_autocomplete__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_form_form__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_csv_csv__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng_socket_io__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_aws_aws__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_aws_aws__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_camera__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_host_host__ = __webpack_require__(571);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































// import { SimpleFormComponent } from '../components/app.simpleform';
// import { ComplexFormComponent } from '../components/app.complexform';
// import { FormValidationComponent } from '../components/app.formvalidations';
// import { LoginPage } from '../pages/login/login';
// import { LoginComponent } from '../components/app.login';

var config = { url: 'http://192.168.2.108:3001', options: {} };
// use this for chat
// const config: SocketIoConfig ={url:'http://192.168.2.108:5000', options: {} }; 
// Use for AWS Functionality 




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_42__pages_host_host__["a" /* HostPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_md2_md2__["a" /* Md2Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_styling_styling__["a" /* StylingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_Root_Root__["a" /* RootPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_event_modal_event_modal__["a" /* EventModalPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_pdf_pdf__["a" /* PdfPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_pdf_project_pdf_project__["a" /* PdfProjectPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_canvas_canvas__["a" /* CanvasPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_canvas2_canvas2__["a" /* Canvas2Page */],
                __WEBPACK_IMPORTED_MODULE_28__pages_chat_room_chat_room__["a" /* ChatRoomPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_dragn_drop_dragn_drop__["a" /* DragnDropPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_qrcode_qrcode__["a" /* QrcodePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_autocomplete_autocomplete__["a" /* AutocompletePage */],
                __WEBPACK_IMPORTED_MODULE_7__components_app_form__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_36__pages_form_form__["a" /* FormPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_csv_csv__["a" /* CsvPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_aws_aws__["a" /* AwsPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_host_host__["a" /* HostPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_31_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_30_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_20_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_33_angular2_tag_input__["RlTagInputModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_38_ng_socket_io__["SocketIoModule"].forRoot(config),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_37__pages_csv_csv__["a" /* CsvPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_aws_aws__["a" /* AwsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_md2_md2__["a" /* Md2Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_styling_styling__["a" /* StylingPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_Root_Root__["a" /* RootPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_event_modal_event_modal__["a" /* EventModalPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_canvas_canvas__["a" /* CanvasPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_pdf_pdf__["a" /* PdfPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_pdf_project_pdf_project__["a" /* PdfProjectPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_canvas2_canvas2__["a" /* Canvas2Page */],
                __WEBPACK_IMPORTED_MODULE_28__pages_chat_room_chat_room__["a" /* ChatRoomPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_dragn_drop_dragn_drop__["a" /* DragnDropPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_qrcode_qrcode__["a" /* QrcodePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_autocomplete_autocomplete__["a" /* AutocompletePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_form_form__["a" /* FormPage */],
                __WEBPACK_IMPORTED_MODULE_7__components_app_form__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_42__pages_host_host__["a" /* HostPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_39__providers_aws_aws__["a" /* AwsProvider */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Root_Root__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_Root_Root__["a" /* RootPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\hp\myApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\hp\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 497:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 251,
	"./af.js": 251,
	"./ar": 252,
	"./ar-dz": 253,
	"./ar-dz.js": 253,
	"./ar-kw": 254,
	"./ar-kw.js": 254,
	"./ar-ly": 255,
	"./ar-ly.js": 255,
	"./ar-ma": 256,
	"./ar-ma.js": 256,
	"./ar-sa": 257,
	"./ar-sa.js": 257,
	"./ar-tn": 258,
	"./ar-tn.js": 258,
	"./ar.js": 252,
	"./az": 259,
	"./az.js": 259,
	"./be": 260,
	"./be.js": 260,
	"./bg": 261,
	"./bg.js": 261,
	"./bm": 262,
	"./bm.js": 262,
	"./bn": 263,
	"./bn.js": 263,
	"./bo": 264,
	"./bo.js": 264,
	"./br": 265,
	"./br.js": 265,
	"./bs": 266,
	"./bs.js": 266,
	"./ca": 267,
	"./ca.js": 267,
	"./cs": 268,
	"./cs.js": 268,
	"./cv": 269,
	"./cv.js": 269,
	"./cy": 270,
	"./cy.js": 270,
	"./da": 271,
	"./da.js": 271,
	"./de": 272,
	"./de-at": 273,
	"./de-at.js": 273,
	"./de-ch": 274,
	"./de-ch.js": 274,
	"./de.js": 272,
	"./dv": 275,
	"./dv.js": 275,
	"./el": 276,
	"./el.js": 276,
	"./en-au": 277,
	"./en-au.js": 277,
	"./en-ca": 278,
	"./en-ca.js": 278,
	"./en-gb": 279,
	"./en-gb.js": 279,
	"./en-ie": 280,
	"./en-ie.js": 280,
	"./en-il": 281,
	"./en-il.js": 281,
	"./en-nz": 282,
	"./en-nz.js": 282,
	"./eo": 283,
	"./eo.js": 283,
	"./es": 284,
	"./es-do": 285,
	"./es-do.js": 285,
	"./es-us": 286,
	"./es-us.js": 286,
	"./es.js": 284,
	"./et": 287,
	"./et.js": 287,
	"./eu": 288,
	"./eu.js": 288,
	"./fa": 289,
	"./fa.js": 289,
	"./fi": 290,
	"./fi.js": 290,
	"./fo": 291,
	"./fo.js": 291,
	"./fr": 292,
	"./fr-ca": 293,
	"./fr-ca.js": 293,
	"./fr-ch": 294,
	"./fr-ch.js": 294,
	"./fr.js": 292,
	"./fy": 295,
	"./fy.js": 295,
	"./gd": 296,
	"./gd.js": 296,
	"./gl": 297,
	"./gl.js": 297,
	"./gom-latn": 298,
	"./gom-latn.js": 298,
	"./gu": 299,
	"./gu.js": 299,
	"./he": 300,
	"./he.js": 300,
	"./hi": 301,
	"./hi.js": 301,
	"./hr": 302,
	"./hr.js": 302,
	"./hu": 303,
	"./hu.js": 303,
	"./hy-am": 304,
	"./hy-am.js": 304,
	"./id": 305,
	"./id.js": 305,
	"./is": 306,
	"./is.js": 306,
	"./it": 307,
	"./it.js": 307,
	"./ja": 308,
	"./ja.js": 308,
	"./jv": 309,
	"./jv.js": 309,
	"./ka": 310,
	"./ka.js": 310,
	"./kk": 311,
	"./kk.js": 311,
	"./km": 312,
	"./km.js": 312,
	"./kn": 313,
	"./kn.js": 313,
	"./ko": 314,
	"./ko.js": 314,
	"./ky": 315,
	"./ky.js": 315,
	"./lb": 316,
	"./lb.js": 316,
	"./lo": 317,
	"./lo.js": 317,
	"./lt": 318,
	"./lt.js": 318,
	"./lv": 319,
	"./lv.js": 319,
	"./me": 320,
	"./me.js": 320,
	"./mi": 321,
	"./mi.js": 321,
	"./mk": 322,
	"./mk.js": 322,
	"./ml": 323,
	"./ml.js": 323,
	"./mn": 324,
	"./mn.js": 324,
	"./mr": 325,
	"./mr.js": 325,
	"./ms": 326,
	"./ms-my": 327,
	"./ms-my.js": 327,
	"./ms.js": 326,
	"./mt": 328,
	"./mt.js": 328,
	"./my": 329,
	"./my.js": 329,
	"./nb": 330,
	"./nb.js": 330,
	"./ne": 331,
	"./ne.js": 331,
	"./nl": 332,
	"./nl-be": 333,
	"./nl-be.js": 333,
	"./nl.js": 332,
	"./nn": 334,
	"./nn.js": 334,
	"./pa-in": 335,
	"./pa-in.js": 335,
	"./pl": 336,
	"./pl.js": 336,
	"./pt": 337,
	"./pt-br": 338,
	"./pt-br.js": 338,
	"./pt.js": 337,
	"./ro": 339,
	"./ro.js": 339,
	"./ru": 340,
	"./ru.js": 340,
	"./sd": 341,
	"./sd.js": 341,
	"./se": 342,
	"./se.js": 342,
	"./si": 343,
	"./si.js": 343,
	"./sk": 344,
	"./sk.js": 344,
	"./sl": 345,
	"./sl.js": 345,
	"./sq": 346,
	"./sq.js": 346,
	"./sr": 347,
	"./sr-cyrl": 348,
	"./sr-cyrl.js": 348,
	"./sr.js": 347,
	"./ss": 349,
	"./ss.js": 349,
	"./sv": 350,
	"./sv.js": 350,
	"./sw": 351,
	"./sw.js": 351,
	"./ta": 352,
	"./ta.js": 352,
	"./te": 353,
	"./te.js": 353,
	"./tet": 354,
	"./tet.js": 354,
	"./tg": 355,
	"./tg.js": 355,
	"./th": 356,
	"./th.js": 356,
	"./tl-ph": 357,
	"./tl-ph.js": 357,
	"./tlh": 358,
	"./tlh.js": 358,
	"./tr": 359,
	"./tr.js": 359,
	"./tzl": 360,
	"./tzl.js": 360,
	"./tzm": 361,
	"./tzm-latn": 362,
	"./tzm-latn.js": 362,
	"./tzm.js": 361,
	"./ug-cn": 363,
	"./ug-cn.js": 363,
	"./uk": 364,
	"./uk.js": 364,
	"./ur": 365,
	"./ur.js": 365,
	"./uz": 366,
	"./uz-latn": 367,
	"./uz-latn.js": 367,
	"./uz.js": 366,
	"./vi": 368,
	"./vi.js": 368,
	"./x-pseudo": 369,
	"./x-pseudo.js": 369,
	"./yo": 370,
	"./yo.js": 370,
	"./zh-cn": 371,
	"./zh-cn.js": 371,
	"./zh-hk": 372,
	"./zh-hk.js": 372,
	"./zh-tw": 373,
	"./zh-tw.js": 373
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 500;

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent(fb) {
        this.preparedTags = [
            'mvnath1998@gmail.com',
            'gaurishrane@fameerp.com',
            'gaurishrane.in',
        ];
        this.complexForm = fb.group({
            'firstName': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'topics': [[], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
            'lastName': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(10)])],
            'gender': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'hiking': false,
            'running': false,
            'swimming': false
        });
    }
    FormComponent.prototype.submitForm = function () {
        console.log(this.complexForm);
        if (this.complexForm.valid) {
            alert('Entry Submitted');
        }
        else {
            alert('Sorry, wrong entry');
        }
    };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-main',
            template: "\n  <div class=\"jumbotron\">\n\n    <h2>Form with Validations</h2>\n\n    <form [formGroup]=\"complexForm\" (ngSubmit)=\"submitForm(complexForm.value)\">\n\n      <div class=\"form-group\" [ngClass]=\"{'has-error':!complexForm.controls['firstName'].valid && complexForm.controls['firstName'].touched}\">\n        <label>First Name:</label>\n        <input class=\"form-control\" type=\"text\" placeholder=\"John\" [formControl]=\"complexForm.controls['firstName']\">\n        <div *ngIf=\"complexForm.controls['firstName'].hasError('required') && complexForm.controls['firstName'].touched\" class=\"alert alert-danger\">You must include a first name.</div>\n      </div>\n      \n      <label>AutoFill</label>\n      <rl-tag-input type=\"text\" [formControl]=\"complexForm.controls['topics']\" placeholder=\"Tags input here\"  [addOnBlur]=\"true\" [autocomplete]=\"true\" [autocompleteItems]=\"preparedTags\" placeholder=\"Topics\" [ngClass]=\"{'has-error':!complexForm.controls['topics'].valid && complexForm.controls['topics'].blur}\"></rl-tag-input>\n        <div *ngIf=\"complexForm.controls['topics'].hasError('required') && complexForm.controls['topics'].blur\" class=\"alert alert-danger\">You must choose at least one tag.</div>\n\n      <div class=\"form-group\" [ngClass]=\"{'has-error':!complexForm.controls['lastName'].valid && complexForm.controls['lastName'].touched}\">\n        <label>Last Name</label>\n        <input class=\"form-control\" type=\"text\" placeholder=\"Doe\" [formControl]=\"complexForm.controls['lastName']\">\n        <div *ngIf=\"complexForm.controls['lastName'].hasError('required') && complexForm.controls['lastName'].touched\" class=\"alert alert-danger\">You must include a last name.</div>\n        <div *ngIf=\"complexForm.controls['lastName'].hasError('minlength') && complexForm.controls['lastName'].touched\" class=\"alert alert-danger\">Your last name must be at least 5 characters long.</div>\n        <div *ngIf=\"complexForm.controls['lastName'].hasError('maxlength') && complexForm.controls['lastName'].touched\" class=\"alert alert-danger\">Your last name cannot exceed 10 characters.</div>\n      </div>\n      <div class=\"form-group\">\n        <label>Gender</label>\n        <div class=\"alert alert-danger\" *ngIf=\"!complexForm.controls['gender'].valid && complexForm.controls['gender'].touched\">You must select a gender.</div>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"gender\" value=\"Male\" [formControl]=\"complexForm.controls['gender']\">\n          Male\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"gender\" value=\"Female\" [formControl]=\"complexForm.controls['gender']\">\n          Female\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>Activities</label>\n      </div>\n      <label class=\"checkbox-inline\">\n        <input type=\"checkbox\" value=\"hiking\" name=\"hiking\" [formControl]=\"complexForm.controls['hiking']\"> Hiking\n      </label>\n      <label class=\"checkbox-inline\">\n        <input type=\"checkbox\" value=\"swimming\" name=\"swimming\" [formControl]=\"complexForm.controls['swimming']\"> Swimming\n      </label>\n      <label class=\"checkbox-inline\">\n        <input type=\"checkbox\" value=\"running\" name=\"running\" [formControl]=\"complexForm.controls['running']\"> Running\n      </label>\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!complexForm.valid\">Submit</button>\n      </div>\n    </form>\n  </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], FormComponent);
    return FormComponent;
}());

//# sourceMappingURL=app.form.js.map

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_deep_linker__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var storage_key = 'image_list';
var CanvasPage = /** @class */ (function () {
    function CanvasPage(navCtrl, navParams, storage, plt, file) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.plt = plt;
        this.file = file;
        this.selectedColor = '#9e2956';
        this.colors = ['#9e2965', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3'];
        this.storedImages = [];
        this.storage.ready().then(function () {
            _this.storage.get(storage_key).then(function (data) {
                if (data !== undefined) {
                    _this.storedImages = data;
                }
            });
        });
    }
    CanvasPage.prototype.ionViewDidEnter = function () {
        var itemHeight = this.fixedContainer.nativeElement.offsetHeight;
        var scroll = this.content.getScrollElement();
        itemHeight = Number.parseFloat(scroll.style.marginTop.replace("px", "")) + itemHeight;
        scroll.style.marginTop = itemHeight + 'px';
    };
    CanvasPage.prototype.ionViewDidLoad = function () {
        this.canvas.Element = this.canvas.nativeElement;
        this.canvasElement.width = this.plt.width() + '';
        this.canvasElement.height = 200;
    };
    CanvasPage.prototype.selectColor = function (color) {
        this.selectedColor = color;
    };
    CanvasPage.prototype.startDrawing = function (ev) {
        // Since the canvas isnt exactly at the 0 position and therefore subtracting the extra from the value
        var canvasPosition = this.canvasElement.getBoundingClientRect();
        this.saveX = ev.touches[0].pageX - canvasPosition.x;
        this.saveY = ev.touches[0].pageY - canvasPosition.y;
    }; //Real position of canvas is fixed
    CanvasPage.prototype.moved = function (ev) {
        var canvasPosition = this.canvasElement.getBoundingClientRect();
        var currentX = ev.touches[0].pageX - canvasPosition.x;
        var currentY = ev.touches[0].pageY - canvasPosition.y;
        //a context to draw on
        var ctx = this.canvasElement.getContext('2d');
        //how the lines should join each other
        ctx.lineJoin = 'round';
        //stroke style
        ctx.strokeStyle = this.selectedColor;
        //line width 
        ctx.linewidth = 5;
        //starting actual drawing
        ctx.beginPath();
        //move to saved position
        ctx.moveTo(this.saveX, this.saveY);
        //create a line to the current point 
        ctx.lineTo(currentX, currentY);
        ctx.closePath();
        //paint it
        ctx.stroke();
        this.saveX = currentX;
        this.saveY = currentY;
    };
    CanvasPage.prototype.saveCanvasImage = function () {
        var _this = this;
        var dataUrl = this.canvasElement.toDataUrl;
        //Getting context again to get a clean canvas
        var ctx = this.canvasElement.getContext('2d');
        ctx.clearRect(0, 0, ctx.canvas.height);
        var name = new Date().getTime() + '.png';
        var path = this.file.dataDirectory;
        //Need to cut string to convert
        var data = dataUrl.split(',')[1];
        var blob = this.b64toBlob(data, 'image/png');
        this.file.writeFile(path, name, blob).then(function (res) {
            //not using path, coz it could change
            _this.storeImage(name);
        }, function (err) {
            console.log('error: ', err);
        });
    };
    CanvasPage.prototype.storeImage = function (imageName) {
        var _this = this;
        var saveObj = { img: imageName };
        this.storedImages.push(saveObj);
        this.storage.set(storage_key, this.storedImages).then(function () {
            //To notice creation of new image
            setTimeout(function () {
                _this.content.scrollToBottom();
            }, 500);
        });
    };
    CanvasPage.prototype.removeImageAtIndex = function (index) {
        //REmoves one element from the list
        var removed = this.storedImages.splice(index, 1);
        //REmoving file with name taken from previous function
        this.file.removeFile(this.file.dataDirectory, removed[0].img).then(function (res) {
            console.log('Removed');
        }, function (err) {
            console.log('remove err: ', err);
        });
        this.storage.set(storage_key, this.storedImages);
    };
    CanvasPage.prototype.getImath = function (imageName) {
        var path = this.file.dataDirectory + imageName;
        path = Object(__WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_deep_linker__["b" /* normalizeUrl */])(path);
        return path;
    };
    // Convert byte to blob - standard function
    CanvasPage.prototype.b64toBlob = function (b64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('imageCanvas'),
        __metadata("design:type", Object)
    ], CanvasPage.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], CanvasPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fixedContainer'),
        __metadata("design:type", Object)
    ], CanvasPage.prototype, "fixedContainer", void 0);
    CanvasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-canvas',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\canvas\canvas.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Ionic Canvas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding no-bounce>\n  <div #fixedContainer ion-fixed>\n    <ion-row>\n      <ion-col *ngFor="let color of colors" [style.background]="color" class="color-block" tappable (click)="selectColor(color)"></ion-col>\n    </ion-row>\n\n    <ion-row radio-group [(ngModel)]="selectedColor">\n      <ion-col *ngFor="let color of colors" text-center>\n        <ion-radio [value]="color"></ion-radio>\n      </ion-col>\n    </ion-row>\n\n    <canvas #imageCanvas (touchstart)="startDrawing($event)" (touchmove)="moved($event)"></canvas>\n\n    <button ion-button full (click)="saveCanvasImage()">Save Image</button>\n  </div>\n  <ion-list *ngIf="storedImages.length > 0"></ion-list>\n  <ion-list-header>Previous Drawings</ion-list-header>\n  <ion-card *ngFor="let obj of storedImages; let i=index"></ion-card>\n  <ion-card-content>\n    <img [src]="getImgPath(obj)">\n\n  </ion-card-content>\n  <ion-row>\n    <button ion-button icon only full color="danger" (click)="removeImageAtIndex(i)">\n      <ion-icon name="trash"></ion-icon>\n    </button>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\canvas\canvas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]])
    ], CanvasPage);
    return CanvasPage;
}());

//# sourceMappingURL=canvas.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HostPage = /** @class */ (function () {
    function HostPage(navCtrl, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
    }
    HostPage.prototype.showPlatform = function () {
        var text = 'I run on: ' + this.platform.platforms();
        var alert = this.alertCtrl.create({
            title: 'My Home',
            subTitle: text,
            buttons: ['Ok']
        });
        alert.present();
    };
    HostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-host',template:/*ion-inline-start:"C:\Users\hp\myApp\src\pages\host\host.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>      Ionic Web\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button full (click)="showPlatform()">Where am I running?</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\hp\myApp\src\pages\host\host.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], HostPage);
    return HostPage;
}());

//# sourceMappingURL=host.js.map

/***/ })

},[405]);
//# sourceMappingURL=main.js.map