import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {
  qrData=null;
  createdCode=null;
  scannedCode=null;

  constructor(public barcodeScanner: BarcodeScanner) {
  }

  createCode(){
    this.createdCode=this.qrData;
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData=>{
      this.scannedCode=barcodeData.text;
    });
  }

}
