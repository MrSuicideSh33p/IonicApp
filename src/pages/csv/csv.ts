import { Component } from '@angular/core';
import * as papa from 'papaparse';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-csv',
  templateUrl: 'csv.html',
})

export class CsvPage {

  csvData: any[] = [];
  headerRow: any[] = [];

  constructor(public navCtrl: NavController, private http: Http) {
    this.readCsvData();
  }

  private readCsvData() {
    this.http.get('assets/icon/dummyData.csv').subscribe(
      data => this.extractData(data),
      err => this.handleError(err)
    );
  }

  private extractData(res) {
    let csvData = res['_body'] || '';
    // Takes value using limiter
    let parsedData = papa.parse(csvData).data;

    this.headerRow = parsedData[0];
    //Removes the one already taken, so that the rest can be parsed and put in
    parsedData.splice(0, 1);
    this.csvData = parsedData;
  }

  downloadCSV() {
    let csv = papa.unparse({
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

  }
  //To stop the data from getting lost like it does sometimes -> Array loses focus when input changes
  trackByFn(index: any, item: any) {
    return index;
  }

  private handleError(err) {
    console.log('Something went wrong: ', err);
  }

}
