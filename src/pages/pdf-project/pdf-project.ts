import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

@Component({
  selector: 'page-pdf-project',
  templateUrl: 'pdf-project.html',
})

export class PdfProjectPage {

  letterObj =
    {
      invoiceto: ' ',
      invoice: ' ',
      payment: ' ',
      itemdesc: ' ',
      account: ' ',
    }
  qty: number;
  price: number;
   slno: number;
  total: number;
  tax: number;
  stotal: number;
  pdfObj = null;




  constructor(public navCtrl: NavController, private plt: Platform, private file: File, private fileOpener: FileOpener) { }

  createPdf() {
    this.total = this.price * this.qty;
    this.tax = this.total * 0.05;
    this.stotal = this.tax + this.total;
    var data = [['Sl No.', 'Item Description', 'Price', 'Qty.', 'Total']];
    var i = 0;
    var len = this.slno;
    for (; i < len; i++) {
      data.push([this.slno+'', this.letterObj.itemdesc, this.price +' $', this.qty + ' $', this.total + ' $']);
    }


    var docDefinition =
      {
        content: 
        [
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
              columns:
                  [
                      {
                          width:420,
                          text: '\n\nPayment Info: ' + this.letterObj.payment+'\nAccount No: ' + this.letterObj.account+'\n\n\n\n\nThank You for your Business',
                      },
                      {
                          width: 'auto',
                          text: '\n\nTotal ' + this.total + '\nTax ' + this.tax + '\n-----------------'+'\nSub Total ' + this.stotal
                      }
                    ]
          },
        ]
      }
    this.pdfObj = pdfMake.createPdf(docDefinition);
  }

  downloadPdf() {
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });

        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download
      this.pdfObj.download();
    }
  }

}
