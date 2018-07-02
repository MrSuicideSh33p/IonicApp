import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/file';
import { normalizeUrl } from 'ionic-angular/navigation/deep-linker';
const storage_key = 'image_list';
@Component({
  selector: 'page-canvas',
  templateUrl: 'canvas.html',
})
export class CanvasPage {
  selectedColor = '#9e2956';
  colors = ['#9e2965', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3'];

  @ViewChild('imageCanvas') canvas: any;
  canvasElement: any;

  // Save points in container
  saveX: number;
  saveY: number;

  storedImages = [];

  @ViewChild(Content) content: Content;
  @ViewChild('fixedContainer') fixedContainer: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private plt: Platform, private file: File) {
    this.storage.ready().then(() => {
      this.storage.get(storage_key).then(data => {
        if (data !== undefined) {
          this.storedImages = data;
        }
      });
    });
  }

  ionViewDidEnter() {
    let itemHeight = this.fixedContainer.nativeElement.offsetHeight;
    let scroll = this.content.getScrollElement();
    itemHeight = Number.parseFloat(scroll.style.marginTop.replace("px", "")) + itemHeight;
    scroll.style.marginTop = itemHeight + 'px';
  }

  ionViewDidLoad() {
    this.canvas.Element = this.canvas.nativeElement;
    this.canvasElement.width = this.plt.width() + '';
    this.canvasElement.height = 200;
  }

  selectColor(color) {
    this.selectedColor = color;
  }

  startDrawing(ev) {
    // Since the canvas isnt exactly at the 0 position and therefore subtracting the extra from the value
    var canvasPosition = this.canvasElement.getBoundingClientRect();
    this.saveX = ev.touches[0].pageX - canvasPosition.x;
    this.saveY = ev.touches[0].pageY - canvasPosition.y;
  }//Real position of canvas is fixed
  moved(ev) {
    var canvasPosition = this.canvasElement.getBoundingClientRect();
    let currentX = ev.touches[0].pageX - canvasPosition.x;
    let currentY = ev.touches[0].pageY - canvasPosition.y;

    //a context to draw on

    let ctx = this.canvasElement.getContext('2d');

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

  }
  saveCanvasImage() {
    var dataUrl = this.canvasElement.toDataUrl;

    //Getting context again to get a clean canvas

    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.height);
    let name = new Date().getTime() + '.png';
    let path = this.file.dataDirectory;
    //Need to cut string to convert
    var data = dataUrl.split(',')[1];
    let blob = this.b64toBlob(data, 'image/png');

    this.file.writeFile(path, name, blob).then(res => {
      //not using path, coz it could change
      this.storeImage(name);
    }, err => {
      console.log('error: ', err);
    });

  }
  storeImage(imageName) {
    let saveObj = { img: imageName };
    this.storedImages.push(saveObj);
    this.storage.set(storage_key, this.storedImages).then(() => {
      //To notice creation of new image
      setTimeout(() => {
        this.content.scrollToBottom();
      }, 500);
    });
  }

  removeImageAtIndex(index) {
    //REmoves one element from the list
    let removed = this.storedImages.splice(index, 1);
    //REmoving file with name taken from previous function
    this.file.removeFile(this.file.dataDirectory, removed[0].img).then(res => {
      console.log('Removed');
    }, err => {
      console.log('remove err: ', err);
    });
    this.storage.set(storage_key, this.storedImages);
  }

  getImath(imageName) {
    let path = this.file.dataDirectory + imageName;
    path = normalizeUrl(path);
    return path;
  }

  // Convert byte to blob - standard function
  b64toBlob(b64Data, contentType) {
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
  }
}
