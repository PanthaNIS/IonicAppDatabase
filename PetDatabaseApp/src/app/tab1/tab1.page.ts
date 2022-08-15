import { Component } from '@angular/core';
// import { AlertController } from 'ionic-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // Reference: https://ionicframework.com/docs/api/alert

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'AppInfo',
      subHeader: 'App Information',
      message: 'Hey user this is the home page. You can see the app author information and certain app guide in this',
      buttons: ['Close'],
    });

    await alert.present();
  }

}
