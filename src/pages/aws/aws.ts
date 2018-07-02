import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, ActionSheetController } from 'ionic-angular';
import { AwsProvider } from '../../providers/aws/aws';
import { File } from '@ionic-native/file';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-aws',
  templateUrl: 'aws.html',
})

export class AwsPage {

  images = [];

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, private toastCtrl: ToastController, private awsProvider: AwsProvider, private actionSheetCtrl: ActionSheetController,private file: File, private camera: Camera) { }
 
  ionViewWillEnter() {
    this.loadImages();
  }

  loadImages() {
    this.images = [];
    this.awsProvider.getFileList().subscribe(files => {
      for (let name of files) {
        this.awsProvider.getSignedFileRequest(name).subscribe(res => {
          this.images.push({key: name, url: res})
        });
      }
    });
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  takePicture(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: sourceType
    }
    // 1
    this.camera.getPicture(options).then((imageData) => {
 
      let loading = this.loadingCtrl.create();
      loading.present();
      //2
      this.file.resolveLocalFilesystemUrl(imageData).then(oneFile => {
        //3
        this.file.readAsArrayBuffer(this.file.tempDirectory, oneFile.name).then(realFile => {
          let type = 'jpg';
          //4
          let newName = this.awsProvider.randomString(6) + new Date().getTime() + '.' + type;
          //5
          this.awsProvider.getSignedUploadRequest(newName, 'image/jpeg').subscribe(data => {
            let reqUrl = data.signedRequest;

            //6
            this.awsProvider.uploadFile(reqUrl, realFile).subscribe(result => {
              //7
              this.awsProvider.getSignedFileRequest(newName).subscribe(res => {
                //8
                this.images.push({ key: newName, url: res });
                loading.dismiss();
              });
            });
          });
        });
      }, err => {
        console.log('err: ', err);
      })
    }, (err) => {
      console.log('err: ', err);
    });
  }



   deleteImage(index) {
    let toRemove = this.images.splice(index, 1);
    this.awsProvider.deleteFile(toRemove[0]['key']).subscribe(res => {
      let toast = this.toastCtrl.create({
        message: res['msg'],
        duration: 2000
      });
      toast.present();
    })
  }
}

//1. Get image
//2. resolve it to local url
//3. read local File
//4. append to put request
//5. create new name
//6. get put request signed url 
//7. use it to upload File
//8. resolve the new file to add to array